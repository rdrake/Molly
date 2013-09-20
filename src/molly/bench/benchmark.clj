(ns molly.bench.benchmark
  (use criterium.core))

(defn benchmark-search
  [f G s t max-hops]
    (bench
      (f G s t max-hops)))
