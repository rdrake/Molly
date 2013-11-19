(ns molly.bench.benchmark
  (:require [clojure.data.json :as json]
            [criterium.core :refer [benchmark]]))

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
