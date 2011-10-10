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
       (required ["--idx-prefix" "Prefix for index name."])
       (required ["--db" "Database location."])))

(defn process-row
  [index ent-def row]
  (let [entity (row-to-entity ent-def row)
        doc (entity-to-doc entity)]
    (add-doc index doc)))

(defn process-value
  [index ent-def col row]
  (let [value (row-to-value ent-def col row)
        doc (value-to-doc value)]
    (println value)
    (add-doc index doc)))

(defn main
  [args]
  (let [opts (parse-args args)
        value-index (mk-index-writer
                      (str (opts :idx-prefix) "-value.idx"))
        entity-index (mk-index-writer
                       (str (opts :idx-prefix) "-entity.idx"))]
    (doseq [ent-def (vals (config :entities))]
      ; Entities first.
      (execute-query db (ent-def :sql)
                     #(process-row entity-index ent-def %))
      ; Now values.
      (doseq [value (ent-def :values)]
        (execute-query db (distinct-value (ent-def :sql) value)
                       #(process-value value-index ent-def value %))))
    (close-index-writer entity-index)
    (close-index-writer value-index)))

(defn -main
  [& args]
  (main (flatten args)))
