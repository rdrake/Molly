(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.index)
  (:import (molly.conf.mycampus Mycampus)
           (molly.datatypes.database Sqlite)
           (molly.datatypes.entity Entity)
           (molly.datatypes.index Lucene)))

(defn build
  [db-path idx-path]
  (let [conf    (Mycampus. db-path idx-path)
        db-conn (connection conf)         ; Relational database (eg. Sqlite)
        ft-db   (index conf)              ; Full-text search database (eg. Lucene)
        idx-w   (open-writer ft-db)       ; Index writer for FTS database
        tables  (tables conf)             ; Tables defined in configuration
        groups  (groups conf)]            ; Groups defined in configuration
    (doseq [[_ ent-def] tables]
      (println (str "Indexing " (name (ent-def :name)) "..."))
      (execute-query db-conn
                     (ent-def :sql)
                     (fn [row]
                      (let [row (with-meta row {:__type__ (name (ent-def :name))})]
                        (add-doc ft-db idx-w (document (init row)))))))
    (close-writer ft-db idx-w)))
