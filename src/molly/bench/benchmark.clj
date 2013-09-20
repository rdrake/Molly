(ns molly.bench.benchmark
  (use criterium.core)
  (require [clojure.data.json :as json]))

(defn benchmark-search
  [f G s t max-hops]
  (let [method  (last (clojure.string/split (str (class f)) #"\$"))
        result 
        (dissoc
          (benchmark (f G s t max-hops) {:verbose false})
          :results)]
    (println
      (json/write-str
        {:method    method
         :max-hops  max-hops
         :results   result}))))
