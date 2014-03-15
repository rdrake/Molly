(ns molly.core
  (:require [clojure.tools.cli :refer [cli]]
            [molly.algo.bfs :refer [bfs]]
            [molly.algo.bfs-atom :refer [bfs-atom]]
            [molly.algo.bfs-ref :refer [bfs-ref]]
            [molly.bench.benchmark :refer [benchmark-search]]
            [molly.conf.config :refer [load-props]]
            [molly.index.build :refer [build]]
            [molly.search.lucene :refer [idx-path idx-searcher]])
  (:gen-class))

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
      (when (opts :index)
        (let [database  (properties :db.path)
              index     (properties :idx.path)]
          (build database index)))
      (when (opts :algorithm)
        (let [searcher  (idx-searcher
                          (idx-path
                            (properties :idx.path)))
              source    (opts :source)
              target    (opts :target)
              f         (condp = (opts :algorithm)
                          "bfs"             bfs
                          "bfs-atom"        bfs-atom
                          "bfs-ref"         bfs-ref
                          (throw
                            (Exception.
                              "Not a valid algorithm choice.")))]
          (if (opts :debug)
            (let [[marked dist prev] (f searcher
                                        source
                                        target)]
              (println marked)
              (println dist)
              (println prev))
            (benchmark-search f searcher source target))
          (shutdown-agents))))))
