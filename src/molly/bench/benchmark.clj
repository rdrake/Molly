(ns molly.bench.benchmark
  (use criterium.core))

(defn benchmark-search
  [f]
  (with-progress-reporting
    (bench
      (deref f)
      :verbose
      :os
      :runtime)))
