(ns molly.datatypes.schema
  (:use molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index))

(defprotocol Schema
  (crawl [this db-conn ft-db idx-w])
  (klass [this])
  (schema-map [this]))

(deftype EntitySchema [S]
  Schema
  (crawl
    [this db-conn ft-db idx-w]
    (execute-query db-conn (S :sql)
                   (fn [row]
                       (add-doc ft-db idx-w (document (encode row S))))))
  (klass
    [this]
    ((schema-map this) :C))
  (schema-map
    [this]
    S))
