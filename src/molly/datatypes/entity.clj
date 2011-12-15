(ns molly.datatypes.entity
  (:import
    [clojure.lang IPersistentMap]
    [org.apache.lucene.document Document Field Field$Index Field$Store]))

(defprotocol IEntity
  (special? [this field-name])
  (field [this field-name field-value])
  (document [this]))

(defrecord Entity [T id attribs]
  IEntity
  (special?
    [this field-name]
    (and (.startsWith field-name "__") (.endsWith field-name "__")))
  (field
    [this field-name field-value]
    (Field. field-name field-value Field$Store/YES
            (if (special? this field-name)
              Field$Index/NOT_ANALYZED
              Field$Index/ANALYZED)))
  (document
    [this]
    (let [doc (Document.)
          fields (into attribs {:__type__ T :__id__ id})]
      (do
        (doseq [[field-name field-value] fields]
          (.add doc (field this (name field-name) (str field-value))))
        doc))))

(defmulti init type)
(defmethod init Document [doc]
  (let [ent-type  (.get doc "__type__")
        ent-id    (.get doc "__id__")
        ent-map   (into {} (for [field (.getFields doc)]
                             [(keyword (.name field)) (.stringValue field)]))
        ent-attrs (dissoc ent-map :__type__ :__id__ :__all__)]
    (Entity. ent-type ent-id ent-attrs)))
(defmethod init IPersistentMap [row]
  (let [ent-type  ((meta row) :__type__)
        ent-id    (row :id)
        ent-attrs (select-keys
                    row
                    (for [[k v] row
                          :when (not= k :id)] k))]
    (Entity. ent-type ent-id ent-attrs)))
