(ns molly.datatypes.schema
  (:use molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index))

(defprotocol Schema
  (crawl [this db-conn ft-db idx-w])
  (klass [this]))

(deftype EntitySchema [schema];[T C sql ID attr values]
  Schema
  (crawl
    [this db-conn ft-db idx-w]
    (execute-query db-conn (schema :sql)
                   (fn [row]
                       (add-doc ft-db idx-w (document (encode row schema))))))
  (klass
    [this]
    (schema :C)))

