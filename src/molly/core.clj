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

(defn print-path
  [dist prev dest]
  (let [prev-dest (prev dest)]
    (if (not (nil? dest))
      (println dest)
      (print-path dist prev prev-dest))))

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
                (let [[dist prev] (ford-fulkerson G "courses|csci_3030u")
                      dest (prev "instructors|70")]
                  (print-path dist prev "instructors|74"))))))
