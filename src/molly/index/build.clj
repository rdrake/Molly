(ns molly.index.build
  (:require [clojureql.core :as cql])
  (:use molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index))

(defn build
  []
  (println "Building stuff.")
  (let [conn {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname "data/mycampus.sq3"}
        path "mycampus.idx"
        db (molly.datatypes.database.Sqlite. conn)
        tables [{:sql (->
                        (cql/table :instructors)
                        (cql/project [:id :name]))
                 :name :instructor
                 :id :id}]
        lucene (molly.datatypes.index.Lucene. path)
        idx (open-writer lucene)
        insert  (fn [row]
                  (let [doc (document (init row))]
                    (add-doc lucene idx doc)))]
    (doseq [ent-def tables]
      (println (str "Indexing " (name (ent-def :name)) "..."))
      (execute-query db
                     (ent-def :sql)
                     (fn [row]
                      (let [row (with-meta row {:__type__ (ent-def :name)})]
                        (add-doc lucene idx (document (init row)))))))
    (close-writer lucene idx)))
