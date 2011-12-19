(ns molly.datatypes.group)

(defprotocol IGroup
  (description [this])
  (sql [this])
  (attributes [this]))

(defrecord Group [desc sql attributes]
  IGroup
  (description
    [this]
    desc)
  (sql
    [this]
    sql)
  (attributes
    [this]
    attributes))
