(ns molly.algo.ford-fulkerson
  (:require [molly.algo.common :refer [find-adj]]))

(defn need-relax? [u v dist]
  (if (dist v)
    (> (dist v) (inc (dist u)))
    true))

(defn relax
  [u v dist prev]
    (if (need-relax? u v dist)
      [(assoc dist v (inc (dist u)))
       (assoc prev v u)]
      [dist prev]))

(defn update-adj
  [G marked dist prev u max-hops]
  (loop [adj      (find-adj G u)
         marked   marked
         dist     dist
         prev     prev
         frontier []]
    (if (or (empty? adj) (>= (dist u) max-hops))
      [(conj marked u) dist prev frontier]
      (let [v     (first adj)
            adj'  (rest adj)]
        (if (marked v)
          (recur adj' marked dist prev frontier)
          (let [[dist' prev'] (relax u v dist prev)
                frontier'     (if (> (dist u) max-hops)
                                frontier
                                (conj frontier v))]
            (recur adj' marked dist' prev' frontier')))))))

(defn ford-fulkerson
  [G s t max-hops]
  (loop [Q      (conj (clojure.lang.PersistentQueue/EMPTY) s)
         marked #{}
         dist   {s 0}
         prev   {s nil}]
    (if (or (empty? Q)
            (some (fn [node] (= node t)) marked))
      [marked dist prev]
      (let [u (first Q)
            Q' (rest Q)
            [marked' dist' prev' frontier]
              (update-adj G marked dist prev u max-hops)]
        (recur (concat Q' frontier) marked' dist' prev')))))
