(ns molly.build-index
  (:use molly.database
        molly.lucene
        molly.mycampus)
  (:use [clojure.tools.cli :only (cli required)]))

(def meta-data
  {:store false :index true :tokenize true})

(defn parse-args
  [args]
  (cli args
       (required ["--dir" "Index location."])
       (required ["--db" "Database location."])))

(defn add-row-to-index
  [index row]
  (let [fields (for [[k v] row] {:name (name k) :value v})
        doc (mk-doc fields)]
    (add-doc index doc)))

(defn main
  [args]
  (let [opts (parse-args args)
        index (mk-index-writer (opts :dir))]
    (doseq [entity (vals (config :entities))]
      (execute-query db (entity :sql) add-row-to-index index))
    (close-index-writer index)))

(defn -main
  [& args]
  (main (flatten args)))
