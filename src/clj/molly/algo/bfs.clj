(ns molly.algo.bfs
  (:require [molly.algo.common :refer [find-adj]]))

(defn update-adj
  [G marked dist prev u max-hops]
  (loop [adj      (find-adj G u)
         marked   marked
         dist     dist
         prev     prev
         frontier []]
    (if (or (empty? adj)
            (>= (dist u) max-hops))
      [(conj marked u) dist prev frontier]
      (let [v     (first adj)
            adj'  (rest adj)]
        (if (marked v)
          (recur adj' marked dist prev frontier)
          (let [dist'     (assoc dist v (inc (dist u)))
                prev'     (assoc prev v u)
                frontier' (conj frontier v)]
            (recur adj' marked dist' prev' frontier')))))))

(defn bfs
  [G s t max-hops]
  (loop [Q      (conj (clojure.lang.PersistentQueue/EMPTY) s)
         marked #{s}
         dist   {s 0}
         prev   {s nil}]
    (if (empty? Q)
      [marked dist prev]
      (let [u   (first Q)
            Q'  (rest Q)
            [marked' dist' prev' frontier]
            (update-adj G marked dist prev u max-hops)]
        (recur (concat Q' frontier) marked' dist' prev')))))
