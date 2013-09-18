(ns molly.bench.benchmark)

(defn warmup
  [f G s t max-hops]
  (let [start (System/nanoTime)]
    (dotimes [n 2000]
      (f G s t max-hops))
    (- (System/nanoTime) start)))

(defn benchmark-search
  [f G s t max-hops]
  (let [warmup-duration (warmup f G s t max-hops)
        start           (System/nanoTime)]
    (f G s t max-hops)
    (let [end (System/nanoTime)]
      (println (str (- end start) " " warmup-duration)))))
