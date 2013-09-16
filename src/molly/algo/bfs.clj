(ns molly.algo.bfs
  (use molly.algo.common))

(defn update-adj
  [G marked dist prev u max-hops]
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
                frontier' (if (> (dist u) max-hops)
                            frontier
                            (conj frontier v))]
            (recur adj' marked dist' prev' frontier')))))))

(defn bfs
  [G s t max-hops]
  (loop [Q      (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
         marked #{}
         dist   {s 0}
         prev   {s nil}]
    (if (or (empty? Q)
            (some (fn [node] (= node t)) marked))
      [marked dist prev]
      (let [u   (first Q)
            Q'  (rest Q)
            [marked' dist' prev' frontier]
            (update-adj G marked dist prev u max-hops)]
        (recur (concat Q' frontier) marked' dist' prev')))))
