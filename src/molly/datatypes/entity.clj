(ns molly.datatypes.entity
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

(defmulti encode (fn [x & _] (class x)))

(defmethod encode IPersistentMap
  [this schema]
  (let [T (schema :T)
        C (schema :C)
        id-col (schema :ID)
        attr-cols (schema :attrs)
        id (if (vector? id-col)
             (uid this id-col)
             (uid this T id-col))]
    (assoc (if (nil? attr-cols)
             this
             (select-keys this attr-cols))
           :__id__ id
           :__type__ (name T)
           :__class__ (name C))))

(defmethod encode Document
  [this] nil)
