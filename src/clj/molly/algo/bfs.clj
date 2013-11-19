(ns molly.algo.bfs
  (:require [molly.algo.common :refer [find-adj]]))

(defn update-adj
  [G marked dist prev u]
  (loop [adj      (find-adj G u)
         marked   marked
         dist     dist
         prev     prev
         frontier []]
    (if (empty? adj)
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
    ; Terminate when nothing is left to explore.
    (if (seq Q)
      (let [u   (first Q)
            Q'  (rest Q)]
        ; Terminate when the target is found, or we reach a limit.
        (if (or (= u t)
                (>= (dist u) max-hops))
          [marked dist prev]
          (let [[marked' dist' prev' frontier]
                (update-adj G marked dist prev u)]
            (recur (concat Q' frontier) marked' dist' prev'))))
      [marked dist prev])))
