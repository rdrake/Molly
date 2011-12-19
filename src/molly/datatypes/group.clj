(ns molly.datatypes.group)

(defprotocol IGroup
  (description [this])
  (sql [this])
  (attributes [this]))

(defrecord Group [desc sql attributes]
  (description
    [this]
    desc)
  (sql
    [this]
    sql)
  (attributes
    [this]
    attributes))
