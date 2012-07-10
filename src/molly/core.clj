(ns molly.core
  (:gen-class)
  (:use clojure.pprint
        molly.conf.config
        molly.server.serve
        molly.index.build
        molly.search.lucene
        molly.search.query-builder
        [clojure.tools.cli :only (cli)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)]
        [molly.algo.bfs :only (bfs)]))

(defn parse-args
  [args]
  (cli args
       ["-a" "--action" "Action to perform [serve|index]"]
       ["-c" "--config" "Path to configuration (properties) file"]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)
        properties              (load-props (opts :config))]
    (condp = action
      "serve"     (start! properties)
      "index"     (build (properties :database)
                         (properties :index))
      "bfs-atom"  (time
                    (bfs-atom
                      (idx-searcher (idx-path (properties :index)))
                      "instructors|74"
                      "courses|csci_3030u"))
      "bfs-ref"   (time
                    (bfs-ref
                      (idx-searcher (idx-path (properties :index)))
                      "instructors|74"
                      "courses|csci_3030u"))
      "bfs"       (time
                    (bfs
                      (idx-searcher (idx-path (properties :index)))
                      "instructors|74"
                      "courses|csci_3030u")))))
