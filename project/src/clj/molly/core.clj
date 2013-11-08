(ns molly.core
  (:gen-class)
  (:use molly.conf.config
        molly.index.build
        molly.search.lucene
        [clojure.tools.cli :only (cli)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)]
        [molly.algo.bfs :only (bfs)]
        [molly.algo.ford-fulkerson :only (ford-fulkerson)]
        [molly.bench.benchmark :only (benchmark-search)]))

(defn parse-args
  [args]
  (cli args
       ["-c" "--config" "Path to configuration (properties) file"]
       ["--algorithm"   "Algorithm to run"]
       ["-s" "--source" "Source node"]
       ["-t" "--target" "Target node"]
       ["--max-hops"    "Maximum number of hops before stopping"
        :parse-fn #(Integer. %)]
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
                        (opts :max-hops)
                        (properties :idx.search.max-hops))]
      (if (opts :index)
        (let [database  (properties :db.path)
              index     (properties :idx.path)]
          (build database index))
        nil)
      (if (opts :algorithm)
        (let [searcher  (idx-searcher
                          (idx-path
                            (properties :idx.path)))
              source    (opts :source)
              target    (opts :target)
              f         (condp = (opts :algorithm)
                          "bfs"             bfs
                          "bfs-atom"        bfs-atom
                          "bfs-ref"         bfs-ref
                          "ford-fulkerson"  ford-fulkerson
                          (throw
                            (Exception.
                              "Not a valid algorithm choice.")))]
          (if (opts :debug)
            (let [[marked dist prev] (f searcher
                                        source
                                        target
                                        max-hops)]
              (println marked)
              (println dist)
              (println prev))
            (benchmark-search f searcher source target max-hops))
          (shutdown-agents))
        nil))))
