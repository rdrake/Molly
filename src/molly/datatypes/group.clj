(ns molly.datatypes.group
  (:import
    (org.apache.lucene.document Document Field Field$Index Field$Store)))

(defprotocol IGroup
  (description [this])
  (sql [this])
  (ids [this])
  (attributes [this]))

(deftype Group [desc sql ids attributes]
  IGroup
  (description
    [this]
    desc)
  (sql
    [this]
    sql)
  (ids
    [this]
    ids)
  (attributes
    [this]
    attributes))
