(ns molly.core
  (:gen-class)
  (:use criterium.core
        molly.conf.config
        molly.index.build
        molly.search.lucene
        molly.search.query-builder
        [clojure.tools.cli :only (cli)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)]
        [molly.algo.bfs :only (bfs)]
        [molly.algo.ford-fulkerson :only (ford-fulkerson)]))

(defn parse-args
  [args]
  (cli args
       ["-c" "--config" "Path to configuration (properties) file"]
       ["--algorithm"   "Algorithm to run"]
       ["-s" "--source" "Source node"]
       ["-t" "--target" "Target node"]
       ["--max-hops"    "Maximum number of hops before stopping"]
       ["--index"       "Build an index of the database"
        :default false
        :flag true]
       ["--benchmark"   "Run benchmarks"
        :default false
        :flag true]
       ["-d" "--debug"  "Displays additional information."
        :default false
        :flag true]
       ["-h" "--help"   "Show help"
        :default false
        :flag true]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))]
    (when (or (opts :help) (not (opts :config)))
      (println banner)
      (System/exit 0))

    (let [properties  (load-props (opts :config))
          max-hops    (if (opts :max-hops)
                        (Integer. (opts :max-hops))
                        (properties :max-hops))]
      (letfn [(algo [f searcher source target]
                (if (opts :benchmark)
                  (bench (f searcher source target max-hops))
                  (let [[marked dist prev]
                        (f searcher source target max-hops)]
                    (if (opts :debug)
                      (println dist)
                      nil))))]
        (if (opts :index)
          (let [database  (properties :database)
                index     (properties :index)]
            (build database index))
          nil)
        (if (opts :algorithm)
          (let [searcher  (idx-searcher
                            (idx-path
                              (properties :index)))
                source    (opts :source)
                target    (opts :target)]
            (condp = (opts :algorithm)
              "bfs"             (algo bfs
                                      searcher
                                      source
                                      target)
              "bfs-atom"        (algo bfs-atom
                                      searcher
                                      source
                                      target)
              "bfs-ref"         (algo bfs-ref
                                      searcher
                                      source
                                      target)
              "ford-fulkerson"  (algo ford-fulkerson
                                      searcher
                                      source
                                      target))
            (shutdown-agents))
          nil)))))
