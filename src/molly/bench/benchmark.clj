(ns molly.bench.benchmark
  (use criterium.core))

(defn benchmark-search
  [f G s t max-hops]
  (with-progress-reporting
    (bench
      (f G s t max-hops))))
