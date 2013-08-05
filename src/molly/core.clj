(ns molly.core
  (:gen-class)
  (:use clojure.pprint
        molly.conf.config
        ;molly.server.serve
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
       ["-c" "--config" "Path to configuration (properties) file"]
       ["--serve"       "Start the server"
        :default false
        :flag true]
       ["--port"        "Port to run the server on"
        :default 8080
        :parse-fn #(Integer. %)]
       ["--algorithm"   "Algorithm to run"]
       ["-s" "--source" "Source node"]
       ["-t" "--target" "Target node"]
       ["--index"       "Build an index of the database"
        :default false
        :flag true]
       ["--benchmark"   "Run benchmarks"
        :default false
        :flag true]
       ["-h" "--help"   "Show help"
        :default false
        :flag true]))

(def counter (atom 0))

(defn ns-to-ms
  [nanosec]
  (/ nanosec (* 1000.0 1000.0)))

(defn warmup
  [func searcher source target seconds]
  (let [start     (System/nanoTime)
        time-in-s (* seconds 1000 1000 1000)]
    (while (< (- (System/nanoTime) start) time-in-s)
      (func searcher source target)
      (swap! counter inc)))

  @counter)

(defn benchmark
  [f searcher source target]
  (let [start (System/nanoTime)]
    (f searcher source target)
    (let [elapsed (- (System/nanoTime) start)]
      (println
        (str "Elapsed time: " (ns-to-ms elapsed 5) " msecs")))))

(defn bench
  [f searcher source target]
  (warmup f searcher "courses|alsu_1101u"
          "schedules|schedules|3067sections|1246teaches|893" 15)
  (benchmark f searcher source target))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))]
    (when (opts :help)
      (println banner)
      (System/exit 0))

    (let [properties  (load-props (opts :config))
          algo        (fn [f searcher source target]
                        (if (opts :benchmark)
                          (bench f searcher source target)
                          (f searcher source target)))]
      (cond
        (opts :index)     (let [database  (properties :database)
                                index     (properties :index)]
                            (build database index))
        (opts :serve)     (start! properties)
        (opts :algorithm) (let [searcher  (idx-searcher
                                            (idx-path
                                              (properties :index)))
                                source    (opts :source)
                                target    (opts :target)]
                            (condp = (opts :algorithm)
                              "bfs"       (algo bfs
                                                searcher
                                                source
                                                target)
                              "bfs-atom"  (algo bfs-atom
                                                searcher
                                                source
                                                target)
                              "bfs-ref"   (algo bfs-ref
                                                searcher
                                                source
                                                target))
                            (shutdown-agents))))))
