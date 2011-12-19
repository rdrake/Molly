(ns molly.core
  (:gen-class)
  (:use molly.index.build
        [clojure.tools.cli :only (cli)]))

(defn parse-args
  [args]
  (cli args
       ["-d" "--database" "Database location."]
       ["-i" "--index" "Index location."]))

(defn main
  [args]
  (let [[opts arguments banner] (parse-args args)
        database  (opts :database)
        index     (opts :index)]
    (build database index)))

(defn -main
  [& args]
  (main (flatten args)))
