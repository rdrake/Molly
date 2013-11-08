(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.schema
        molly.search.lucene)
  (:import (molly.conf.mycampus Mycampus)))

(defn build
  [db-path path]
  (let [conf    (Mycampus. db-path path)
        db-conn (connection conf)
        ft-path (idx-path (index conf))
        idx-w   (idx-writer ft-path)
        schemas (schema conf)]
    (doseq [ent-def schemas]
      (println "Indexing" (name (klass ent-def)) "...")
      (crawl ent-def db-conn idx-w))

    (close-idx-writer idx-w)))
