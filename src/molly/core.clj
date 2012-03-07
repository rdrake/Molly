(ns molly.core
  (:gen-class)
  (:use molly.server.serve))

(defn -main
  [& args]
  (println "Starting Molly...")
  (start!))

  ;(:use molly.datatypes.entity
  ;      molly.index.build
  ;      molly.search.lucene
  ;      molly.search.query-builder
  ;      [clojure.tools.cli :only (cli)]))

(comment
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
)
(comment
(defn -main
  [& args]
  (let [path      (idx-path "mycampus.idx")
        searcher  (idx-searcher path)
        q1        (query :type :entity)
        q2        (query :class :courses)
        ;q3        (query :code "csci")
        q4        (query :code "3030u")
        bq        (boolean-query
                    [q1 :and]
                    [q2 :and]
                    ;[q3 :and]
                    [q4 :and])
        results   (map doc->data (idx-search searcher bq))]
    (doseq [result results]
      (doseq [[K V] result]
        (println (str (name K) ": " V)))))))
