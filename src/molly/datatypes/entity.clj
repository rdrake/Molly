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
  (println (str "*** CLASS *** " (.getClass fields)))
  (println (str "*** FIELDS *** " (doall (map println fields))))
  (let [doc (Document.)]
    (do
      (doseq [[field-name field-value] fields]
        (.add doc (field (name field-name) (str field-value))))
      doc)))

(defmulti decode (fn [x & _] (class x)))

(defmethod decode IPersistentMap
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
                 :entity  (assoc meta-data :id (uid this T id-col))
                 :group   (assoc meta-data :entities (uid this id-col))
                 (throw (IllegalArgumentException. "I only know how to deal with types :value, :entity, and :group"))))))

(defmethod decode Document
  [this] nil)

(defmulti encode (fn [x & _] (class x)))

(defmethod encode IPersistentMap
  [this]
  (let [int-meta  (meta this)
        T         (int-meta :type)
        luc-meta  [[:__type__  T]
                   [:__class__ (int-meta :class)]
                   [:__all__   (let [all (clojure.string/join " " (vals this))]
                                 all)]]
                                 ;;(if (not= T :value)
                                 ;;  all
                                 ;;  clojure.string/join " " q-gram(all)))]]
                                 ;(if (= T :value)
                                 ;  q-gram(all)
                                 ;  all))]]
        raw-doc   (concat luc-meta
                          this
                          [(condp = (int-meta :type)
                             :value   []
                             :entity  [:__id__ (int-meta :id)]
                             :group   [:__entities__ (int-meta :entities)])])]
    (document raw-doc)))

(defmethod encode Document
  [this] nil)
