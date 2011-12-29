(ns molly.datatypes.schema
  (:use molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index))

(defprotocol Schema
  (crawl [this db-conn ft-db idx-w])
  (klass [this]))

(deftype EntitySchema [T C sql ID attr values]
  Schema
  (crawl
    [this db-conn ft-db idx-w]
    (execute-query db-conn sql
                   (fn [row]
                     (let [row (with-meta row {:__type__ T
                                               :__class__ C
                                               :__id__ ID})]
                       (add-doc ft-db idx-w (document (init row)))))))
  (klass
    [this]
    C))

