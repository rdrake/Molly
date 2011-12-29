(ns molly.datatypes.entity
  (:import
    [clojure.lang IPersistentMap IPersistentList]
    [org.apache.lucene.document Document Field Field$Index Field$Store]))

(defn special?
  [field-name]
  (and (.startsWith field-name "__") (.endsWith field-name "__")))

(defn uid
  ([row T id]
   (if (nil? (row id))
     (throw (Exception. (str "ID column " id " does not exist in row " row "."))))
   (str (name T) "|" (clojure.string/replace (row id) #"\s+" "_")))
  ([row Tids]
   (clojure.string/join " " (for [[T id] Tids]
                              (uid row T id)))))
  
(defprotocol IEntity
  (field [this field-name field-value])
  (document [this]))

(defrecord Entity [T C id attr]
  IEntity
  (field
    [this field-name field-value]
    (Field. field-name field-value Field$Store/YES Field$Index/ANALYZED))
  (document
    [this]
    (let [doc (Document.)
          fields (into attr {:__type__ (name T) :__id__ (name id)})]
      (do
        (doseq [[field-name field-value] fields]
          (.add doc (field this (name field-name) (str field-value))))
        doc))))

(defmulti init type)
;(defmethod init Document [doc]
;  (let [ent-type  (.get doc "__type__")
;        ent-class (.get doc "__class__")
;        ent-id    (.get doc "__id__")
;        ent-map   (into {} (for [field (.getFields doc)]
;                             [(keyword (.name field)) (.stringValue field)]))]
;    (Entity. ent-type ent-class ent-id (filter (fn [itm] (not (special? itm)))) [])))
(defmethod init IPersistentMap [row]
  (let [ent-type  ((meta row) :__type__)
        ent-class ((meta row) :__class__)
        ent-id    ((meta row) :__id__)]
    (let [eid (if (seq? ent-id)
                (uid row ent-id)
                (uid row ent-class ent-id))]
      (Entity. ent-type ent-class eid row))))
  ;      ID        (uid row ent-class ent-id)]
;    (Entity. ent-type ent-class ID row)))
