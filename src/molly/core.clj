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
  [func searcher source accept seconds]
  "Takes in a function, searcher, source, accept function, and the number
  of sections to run the function for"
  (let [start     (System/nanoTime)
        time-in-s (* seconds 1000 1000 1000)]
    (while (< (- (System/nanoTime) start) time-in-s)
      (func searcher source accept)
      (swap! counter inc)))

  @counter)
;    (println (str (ns-to-ms (- (System/nanoTime) start)) " ms"))))

(defn benchmark
  [func searcher source accept]
  "Benchmarks a function with a given searcher, source, and accept function"
  (let [start (System/nanoTime)]
    (func searcher source accept)
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
        accept                  (fn [args]
                                  (let [[marked hops] args]
                                    (or (some (fn [x]
                                                (= x target)) marked)
                                        (>= hops 25))))
        bench                   (fn [func]
                                  (warmup
                                    func
                                    searcher
                                    "courses|alsu_1101u"
                                    accept
                                    30)
                                  (benchmark func searcher source accept))]
    (condp = action
      "serve"     (start! properties)
      "index"     (build (properties :database)
                         (properties :index))
      "bfs-atom-bench" (bench bfs-atom)
      "bfs-ref-bench"  (bench bfs-ref)
      "bfs-bench"      (bench bfs)
      ;"bfs-atom"      (bench' bfs-atom)
      ;"bfs-ref"       (bench' bfs-ref)
      ;"bfs"           (bench' bfs)
      (println "I'm afraid I can't do that, Ken."))
    
    (shutdown-agents)))
