(ns molly.index.build
  "A collection of functions which build the Lucene index."
  (:use molly.conf.config
        molly.util.converter
        molly.util.database
        molly.util.lucene
        [clojure.tools.cli :only (cli required optional group)]))

(defn parse-args
  [args]
  (cli args
       (required ["--db" "Database location."])
       (group "--index"
              (optional ["-r" "--replace" :default true])
              (optional ["-p" "--prefix" :default "mycampus"]))))

(defn process-row
  [index ent-def row]
  (let [T         (name (ent-def :name))
        id        (row (ent-def :id))
        attr_keys (for [[k v] row :when (not= k (ent-def :id))] k)
        attrs     (select-keys row attr_keys)
        entity    (any->entity T id attrs)
        doc       (entity->doc entity)]
    (add-doc index doc)))

(defn main
  [args]
  (let [opts    (parse-args args)
        prefix  ((opts :index) :prefix)
        db      (into (config :db) {:subname (opts :db)})
        index (mk-index-writer (str prefix "-entity.idx"))]
    (doseq [ent-def (vals (config :entities))]
      (execute-query db (ent-def :sql)
                     #(process-row index ent-def %)))
    (close-index-writer index)))

(defn -main
  [& args]
  (let [start (System/currentTimeMillis)]
    (main (flatten args))
    (let [stop (System/currentTimeMillis)]
      (println (str "Finished indexing in " (- stop start) " ms.")))))
