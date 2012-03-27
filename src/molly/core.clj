(ns molly.core
  (:gen-class)
  (:use molly.server.serve
        molly.index.build
        molly.search.lucene
        molly.search.query-builder 
        [clojure.tools.cli :only (cli)]))

(defn parse-args
  [args]
  (cli args
       ["-a" "--action" "Action to perform [serve|index]"]
       ["-d" "--database" "Database location."]
       ["-i" "--index" "Index location."]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)]
    (if (= action "serve")
      ((println "Starting Molly...")
       (start!))
      (let [database  (opts :database)
            index     (opts :index)]
        (build database index)))))
