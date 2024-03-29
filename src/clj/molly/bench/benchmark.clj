(ns molly.bench.benchmark
  (:require [clojure.data.json :as json]
            [criterium.core :refer [benchmark]]))

(defn benchmark-search
  [f G s t]
  (let [method  (last (clojure.string/split (str (class f)) #"\$"))
        result 
        (dissoc
          (benchmark (f G s t) {:verbose false})
          :results)]
    (println
      (json/write-str
        {:method    method
         :results   result}))))
