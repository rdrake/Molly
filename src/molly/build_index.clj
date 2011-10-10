(ns molly.build-index
  (:use molly.database
        molly.lucene
        molly.mycampus
        molly.converter
        [clojure.tools.cli :only (cli required)]))

(def meta-data
  {:store false :index true :tokenize true})

(defn parse-args
  [args]
  (cli args
       (required ["--dir" "Index location."])
       (required ["--db" "Database location."])))

(defn process-row
  [index ent-def row]
  (let [entity (row-to-entity ent-def row)
        doc (entity-to-doc entity)]
    (add-doc index doc)))

(defn main
  [args]
  (let [opts (parse-args args)
        index (mk-index-writer (opts :dir))]
    (doseq [entity (vals (config :entities))]
      (
      (execute-query db (entity :sql) process-row index ent-def))
    (close-index-writer index)))

(defn -main
  [& args]
  (main (flatten args)))
