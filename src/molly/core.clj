(ns molly.core
  (:gen-class)
  (:use molly.algo.ford-fulkerson
        molly.server.serve
        molly.index.build
        molly.search.lucene
        molly.search.query-builder
        [clojure.tools.cli :only (cli)]
        [clojure.pprint :only (pprint)]))

(defn parse-args
  [args]
  (cli args
       ["-a" "--action" "Action to perform [serve|index|algo]"]
       ["-d" "--database" "Database location."]
       ["-i" "--index" "Index location."]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)]
    (condp = action
      "serve" ((println "Starting Molly...")
                 (start!))
      "index" (let [database  (opts :database)
                    index     (opts :index)]
                (build database index))
      "algo"  (let [G (idx-searcher (idx-path "mycampus.idx"))]
                (println "Running Ford-Fulkerson...")
                (pprint (ford-fulkerson nil "courses|csci_3030u"))))))
