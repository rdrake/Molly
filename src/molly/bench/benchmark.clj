(ns molly.bench.benchmark)

(defn s-to-ns
  [s]
  (* s 1000 1000 1000))

(defn warmup
  [f duration min-executions]
  (let [start           (System/nanoTime)
        duration-in-ns  (s-to-ns duration)]
    (loop [execution-count 0]
      (f)
      
      (let [end       (System/nanoTime)
            duration  (- end start)]
        (if (or (< duration duration-in-ns)
                (< execution-count min-executions))
          (recur (inc execution-count))
          [duration execution-count])))))

(defn benchmark-search
  [f]
  (let [[duration execution-count]  (warmup f 5 2500)
       start                        (System/nanoTime)]
    (f)
    (let [end (System/nanoTime)]
      (println (str (- end start) " " execution-count " " duration)))))
