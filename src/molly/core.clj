(ns molly.core
  (:gen-class)
  (:use clojure.pprint
        criterium.core
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
       ["-c" "--config" "Path to configuration (properties) file"]
       ["-s" "--source" "Source node"]
       ["-t" "--target" "Target node"]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)
        properties              (load-props (opts :config))
        searcher                (idx-searcher
                                  (idx-path
                                    (properties :index)))
        source                  (opts :source)
        target                  (opts :target)
        accept                  (fn [args]
                                  (let [[marked hops] args]
                                    (or (some (fn [x]
                                                (= x target)) marked)
                                        (>= hops 25))))]
    (condp = action
      "serve"     (start! properties)
      "index"     (build (properties :database)
                         (properties :index))
      "bfs-atom"  (bench (bfs-atom searcher source accept))
      "bfs-ref"   (bench (bfs-ref searcher source accept))
      "bfs"       (bench (bfs searcher source accept)))))
