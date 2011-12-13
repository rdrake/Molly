(ns molly.index.build
  "A collection of functions which build the Lucene index."
  (:gen-class)
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
  (let [T       (name (ent-def :name))
        id      (entry->uid T (row (ent-def :id)))
        attrs   (select-keys row (for [[k v] row :when (not= k (ent-def :id))] k))
        entity  (a->entity T id attrs)]
    (add-doc index (entity->doc entity))))

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
        paths     {:entity (str prefix "-entity.idx")
                   :groups (str prefix "-groups.idx")}
        index     {:entity (mk-index-writer (paths :entity))
                   :groups (mk-index-writer (paths :groups))}
        hierarchy (config :hierarchy)
        top-level (hierarchy :top-level)
        ext-row   (fn [row] (row (top-level :id)))]
    (println "Indexing entities...")
    (doseq [ent-def (config :entities)]
      (execute-query db (ent-def :sql) #(process-row (index :entity) ent-def %)))

    (println "Building index of groups...")
    (println " just kidding!")

    ; Close all index writers
    (doseq [[_ writer] index] (close-index-writer writer))

    (println "Building phrase completion index...")
    (add-spelling-correction (paths :entity))))
    
(defn -main
  [& args]
  (let [start (System/currentTimeMillis)]
    (main (flatten args))
    (let [stop (System/currentTimeMillis)]
      (println (str "Finished indexing in " (- stop start) " ms.")))))
