(ns molly.datatypes.entity
  (:use molly.util.nlp)
  (:import
    [clojure.lang IPersistentMap IPersistentList]
    [org.apache.lucene.document Document Field Field$Index Field$Store]))

(defn special?
  [field-name]
  (and (.startsWith field-name "__") (.endsWith field-name "__")))

(defn uid
  ([row C id]
   (if (nil? (row id))
     (throw (Exception. (str "ID column " id " does not exist in row " row "."))))
   (str (name C) "|" (clojure.string/replace (row id) #"\s+" "_")))
  ([row Tids]
   (clojure.string/join " " (for [[C id] Tids]
                              (uid row C id)))))

(defn field
  [field-name field-value]
  (Field. field-name field-value Field$Store/YES Field$Index/ANALYZED))

(defn document
  [fields]
  (let [doc (Document.)]
    (do
      (doseq [[field-name field-value] fields]
        (.add doc (field (name field-name) (str field-value))))
      doc)))

(defn row->data
  ^{:doc "Transforms a row into the internal representation."}
  [this schema]
  (let [T         (schema :T)
        C         (schema :C)
        attr-cols (schema :attrs)
        attrs     (if (nil? attr-cols)
                    this
                    (select-keys this attr-cols))
        meta-data {:type T :class C}
        id-col    (schema :ID)]
    (with-meta attrs
               (condp = T
                 :value   (assoc meta-data
                                 :class
                                 (clojure.string/join "|"
                                                      (map name
                                                           [C
                                                            (first attr-cols)])))
                 :entity  (assoc meta-data :id (uid this C id-col))
                 :group   (assoc meta-data :entities (uid this id-col))
                 (throw (IllegalArgumentException. "I only know how to deal with types :value, :entity, and :group"))))))

(defn doc->data
  ^{:doc "Transforms a Document into the internal representation."}
  [this]
  (let [fields        (.getFields this)
        extract       (fn [x] [(keyword (clojure.string/replace
                                          (.name x) "_" "")) (.stringValue x)])
        check-special (fn [x] (special? (.name x)))
        filter-fn     (fn [f] (apply hash-map (flatten
                                                (map extract f))))]
    (with-meta
      (filter-fn (filter (fn [x] (not (check-special x))) fields))
      (filter-fn (filter check-special fields)))))

(defn data->doc
  ^{:doc "Transforms the internal representation into a Document."}
  [this]
  (let [int-meta  (meta this)
        T         (int-meta :type)
        luc-meta  [[:__type__  (name T)]
                   [:__class__ (name (int-meta :class))]
                   [:__all__   (let [all (clojure.string/join " " (vals this))]
                                 (if (= T :value)
                                   (q-gram all)
                                   all))]]
        raw-doc   (concat luc-meta
                          this
                          (condp = (int-meta :type)
                            :value   []
                            :entity  [[:__id__ (int-meta :id)]]
                            :group   [[:__entities__ (int-meta :entities)]]))]
    (document raw-doc)))
