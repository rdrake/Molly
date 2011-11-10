(ns molly.index.build
  "A collection of functions which build the Lucene index."
  (:use molly.conf.config
        molly.util.converter
        molly.util.database
        molly.search.lucene
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
        id        (entry->uid T (row (ent-def :id)))
        attr_keys (for [[k v] row :when (not= k (ent-def :id))] k)
        attrs     (select-keys row attr_keys)
        entity    (row->entity T id attrs)
        doc       (entity->doc entity)]
    (add-doc index doc)))

(defn process-group
  [index ids row]
  ; (first id) -> entity
  ; (second id) -> entity's id key
  (let [entry (for [id ids] (entry->uid (first id) (row (second id))))]
    ; Don't forget to get rid of nil values!
    (add-doc index (group-row->doc (filter identity entry)))))

(defn main
  [args]
  (let [opts      (parse-args args)
        prefix    ((opts :index) :prefix)
        db        (into (config :db) {:subname (opts :db)})
        e_path    (str prefix "-entity.idx")
        g_path    (str prefix "-groups.idx")
        e_index   (mk-index-writer e_path)
        g_index   (mk-index-writer g_path)
        hierarchy (config :hierarchy)]
    ; Entities
    (doseq [ent-def (config :entities)]
      (execute-query db (ent-def :sql)
                     #(process-row e_index ent-def %)))
    (close-index-writer e_index)
    (add-spelling-correction e_path)

    ; Groups
    (execute-query db (hierarchy :sql)
                   #(process-group g_index (hierarchy :ids) %))
    (close-index-writer g_index)))

(defn -main
  [& args]
  (let [start (System/currentTimeMillis)]
    (main (flatten args))
    (let [stop (System/currentTimeMillis)]
      (println (str "Finished indexing in " (- stop start) " ms.")))))
