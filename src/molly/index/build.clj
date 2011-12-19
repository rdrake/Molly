(ns molly.index.build
  (:use molly.conf.config
        molly.conf.mycampus
        molly.datatypes.database
        molly.datatypes.entity
        molly.datatypes.group
        molly.datatypes.index)
  (:import (molly.conf.mycampus Mycampus)))

(defn uid
  [T id]
  (str T "|" (clojure.string/replace id #"\s+" "_")))

(defn process-entity
  [ft-db idx-w ent-def row]
  (let [T   (name (ent-def :name))
        id  (row (ent-def :id))
        uid (uid T id)
        row (with-meta row {:__type__ T
                            :__id__   uid})]
    (add-doc ft-db idx-w (document (init row)))))

(defn process-group
  [ft-db idx-w group-def row]
  (let [ids (for [[T col] (ids group-def)]
              (uid (name T) (row col)))
        row (with-meta {} {:__type__  "group"
                           :__id__    (clojure.string/join " " ids)})]
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
      (execute-query db-conn (ent-def :sql) #(process-entity ft-db idx-w ent-def %)))
    (doseq [group groups]
      (println (str "Grouping " (description group) "..."))
      (execute-query db-conn (sql group) #(process-group ft-db idx-w group %)))

    (close-writer ft-db idx-w)))
