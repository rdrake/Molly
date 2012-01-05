(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.schema
        molly.datatypes.index)
  (:import (molly.conf.mycampus Mycampus)))

(defn build
  [db-path idx-path]
  (let [conf    (Mycampus. db-path idx-path)
        db-conn (connection conf)   ; Relational database (eg. Sqlite)
        ft-db   (index conf)        ; Full-text search database (eg. Lucene)
        idx-w   (open-writer ft-db) ; Index writer for FTS database
        schemas (schema conf)]
    (doseq [ent-def schemas]
      (if (nil? ent-def)
        (println "Entity definition is nil.")
        (println "Working on it."))
      (println "Indexing " (name (klass ent-def)) "...")
      (crawl ent-def db-conn ft-db idx-w))
    
    (close-writer ft-db idx-w)

    (let [schema-maps (for [S schemas]
                        (schema-map S))
          fields (flatten (map :values schema-maps))]
      (spell-check ft-db fields))))
