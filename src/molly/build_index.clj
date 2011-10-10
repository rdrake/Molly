(ns molly.build-index
  (:use molly.database
        molly.lucene
        molly.mycampus)
  (:use [clojure.tools.cli :only (cli required)]))

(defn parse-args
  [args]
  (cli args
       (required ["--dir" "Index location."])
       (required ["--db" "Database location."])))

(defn main
  [args]
  (let [opts (parse-args args)
        index (clucy/disk-index (opts ;dir))
        f (fn [row] (println row))]
    (doseq [entity (vals (config :entities))]
      (execute-query db (entity :sql) f))
    ))

(defn -main
  [& args]
  (main (flatten args)))
;(ns molly.build-index
;  (:require [clucy.core :as clucy])
;  (:use molly.database
;        molly.mycampus))
;
;(def index (clucy/disk-index "entity.idx"))
;
;(defn f
;  [row]
;  (clucy/add index row))
;

;(doseq [entity (vals (config :entities))]
;  (execute-query db (entity :sql) index))
