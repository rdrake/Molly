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
       ["-c" "--config" "Path to configuration (properties) file"]
       ["-s" "--source" "Source node"]
       ["-t" "--target" "Target node"]))

(def counter (atom 0))

(defn ns-to-ms
  [nanosec]
  (/ nanosec (* 1000.0 1000.0)))

(defn warmup
  [func searcher source target max-hops seconds]
  "Takes in a function, searcher, source, accept function, and the number
  of sections to run the function for"
  (let [start     (System/nanoTime)
        time-in-s (* seconds 1000 1000 1000)]
    (while (< (- (System/nanoTime) start) time-in-s)
      (func searcher source target max-hops)
      (swap! counter inc)))

  @counter)

(defn benchmark
  [f searcher source target max-hops]
  "Benchmarks a function with a given searcher, source, and accept function"
  (let [start (System/nanoTime)]
    (f searcher source target max-hops)
    (let [elapsed (- (System/nanoTime) start)]
      (println (str "Elapsed time: " (ns-to-ms elapsed) " msecs")))))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)
        properties              (load-props (opts :config))
        searcher                (if (not (= action "index"))
                                  (idx-searcher
                                    (idx-path
                                      (properties :index)))
                                  nil)
        source                  (opts :source)
        target                  (opts :target)
        bench                   (fn [func]
                                  (warmup
                                    func
                                    searcher
                                    "courses|alsu_1101u"
                                    "schedules|schedules|3067sections|1246teaches|893"
                                    5
                                    5)
                                  (benchmark func searcher source target 5))]
    (condp = action
      "serve"     (start! properties)
      "index"     (build (properties :database)
                         (properties :index))
      "bfs"       (bfs searcher source target 5)
      "bfs-bench" (bench bfs)
      "bfs-atom-bench" (bench bfs-atom)
      "bfs-ref-bench"  (bench bfs-ref)
      ;"bfs-bench"      (bench bfs)
      ;"bfs-atom"      (bench' bfs-atom)
      ;"bfs-ref"       (bench' bfs-ref)
      ;"bfs"           (bench' bfs)
      (println "I'm afraid I can't do that, Ken."))
    ))
    ;(shutdown-agents)))
