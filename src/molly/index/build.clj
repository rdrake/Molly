(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.group
        molly.datatypes.index)
  (:import (molly.conf.mycampus Mycampus)))

(defn process-row
  [ft-db idx-w ent-def row]
  (let [row (with-meta row {:__type__ (name (ent-def :name))})]
    (add-doc ft-db idx-w (document (init row)))))

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
      (execute-query db-conn (ent-def :sql) #(process-row ft-db idx-w ent-def %)))
    
    ;(doseq [group (groups conf)]
    ;  (println (str "Grouping " (description group) "..."))
    ;  )

    (close-writer ft-db idx-w)))
