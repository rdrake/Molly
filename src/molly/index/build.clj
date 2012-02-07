(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.schema
        ;molly.datatypes.index
        molly.search.lucene)
  (:import (molly.conf.mycampus Mycampus)))

(defn build
  [db-path path]
  (let [conf    (Mycampus. db-path path)
        db-conn (connection conf)   ; Relational database (eg. Sqlite)
        ft-path (idx-path (index conf))
        ;ft-db   (idx-writer ft-path)
        ;ft-db   (index conf)        ; Full-text search database (eg. Lucene)
        ;idx-w   (open-writer ft-db) ; Index writer for FTS database
        idx-w   (idx-writer ft-path)
        schemas (schema conf)]
    (doseq [ent-def schemas]
      (println "Indexing " (name (klass ent-def)) "...")
      (crawl ent-def db-conn idx-w))

    (close-idx-writer idx-w)))
