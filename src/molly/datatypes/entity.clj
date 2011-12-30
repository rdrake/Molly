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

;(defmulti document :__type__)
;(defmethod document :entity
(defn document
  [fields]
  (let [doc (Document.)]
    (do
      (doseq [[field-name field-value] fields]
        (.add doc (field (name field-name) (str field-value))))
      doc)))

;(defmethod document :group
;  [this]

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

(defmethod encode :default
  [this schema]
  (throw (Exception. "Default called")))

;(defmulti init type)
;(defmethod init Document [doc]
;  (let [ent-type  (.get doc "__type__")
;        ent-class (.get doc "__class__")
;        ent-id    (.get doc "__id__")
;        ent-map   (into {} (for [field (.getFields doc)]
;                             [(keyword (.name field)) (.stringValue field)]))]
;    (Entity. ent-type ent-class ent-id (filter (fn [itm] (not (special? itm)))) [])))
;(defmethod init IPersistentMap [row]
;  (let [ent-type  ((meta row) :__type__)
;        ent-class ((meta row) :__class__)
;        ent-id    ((meta row) :__id__)]
;    (let [eid (if (seq? ent-id)
;                (uid row ent-id)
;                (uid row ent-class ent-id))]
;      (Entity. ent-type ent-class eid row))))
  ;      ID        (uid row ent-class ent-id)]
;    (Entity. ent-type ent-class ID row)))
