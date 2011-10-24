(ns molly.index.build
  "A collection of functions which build the Lucene index."
  (:use molly.conf.config
        molly.util.converter
        molly.util.database
        molly.util.lucene
        [clojure.tools.cli :only (cli required optional group)]))

(def meta-data
  {:store false :index true :tokenize true})

(defn parse-args
  [args]
  (cli args
       (required ["--db" "Database location."])
       (group "--index"
              (optional ["-r" "--replace" :default true])
              (optional ["-p" "--prefix" :default "mycampus"]))))

(defn process-row
  [index ent-def row]
  (let [entity (row-to-entity ent-def row)
        doc (entity-to-doc entity)]
    (add-doc index doc)))

(defn process-value
  [index ent-def col row]
  (let [value (row-to-value ent-def col row)
        doc (value-to-doc value)]
    (add-doc index doc)))

(defn main
  [args]
  (let [opts (parse-args args)
        prefix ((opts :index) :prefix)
        value-index (mk-index-writer (str prefix "-value.idx"))
        entity-index (mk-index-writer (str prefix "-entity.idx"))]
    (println ((opts :index) :prefix))
    ; Remove the existing index if necessary.
    (doseq [ent-def (vals (config :entities))]
      ; Entities first.
      (execute-query (config :db) (ent-def :sql)
                     #(process-row entity-index ent-def %))
      ; Now values.
      (doseq [value (ent-def :values)]
        (execute-query (config :db) (distinct-value (ent-def :sql) value)
                       #(process-value value-index ent-def value %))))
    (close-index-writer entity-index)
    (close-index-writer value-index)))

(defn -main
  [& args]
  (let [start (System/currentTimeMillis)]
    (main (flatten args))
    (let [stop (System/currentTimeMillis)]
      (println (str "Finished indexing in " (- stop start) " ms.")))))
