(ns molly.bench.benchmark)

(defn benchmark-search
  [f]
  (let [start (System/nanoTime)]
    (f)
    (let [end (System/nanoTime)]
      (println (str (- end start))))))
