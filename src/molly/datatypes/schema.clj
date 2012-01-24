(ns molly.datatypes.schema 
  (:use molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index
        molly.util.nlp)
  (:require [clojureql.core :as cql]))

(defprotocol Schema
  (crawl [this db-conn ft-db idx-w])
  (klass [this])
  (schema-map [this]))

(deftype EntitySchema [S]
  Schema
  (crawl
    [this db-conn ft-db idx-w]
    (let [sql (S :sql)]
      (execute-query db-conn sql
                     (fn [row]
                       (add-doc ft-db idx-w (data->doc (row->data row S)))))
      
      (if (= (S :T) :entity)
        (doseq [value (S :values)]
          (let [query (->
                        sql
                        (cql/project [(S :ID) value])
                        (cql/grouped [value]))]
            (execute-query db-conn query
                           (fn [row]
                             (add-doc ft-db idx-w (data->doc
                                                    (row->data row
                                                            (assoc S
                                                                   :T :value)))))))))))
  (klass
    [this]
    ((schema-map this) :C))
  (schema-map
    [this]
    S))
