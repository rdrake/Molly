(ns molly.algo.bfs
  (use molly.algo.common))

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
          (let [dist' (assoc dist v (inc (dist u)))
                prev' (assoc prev v u)]
            (recur adj' marked dist' prev' (conj frontier v))))))))

(defn bfs
  [G s accept]
  (loop [Q      (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
         marked #{}
         dist   {s 0}
         prev   {s nil}
         hops   0]
    (if (or (empty? Q)
            (accept [marked hops]))
      [marked dist prev]
      (let [u   (first Q)
            Q'  (rest Q)
            [marked' dist' prev' frontier]
            (update-adj G marked dist prev u)]
        (recur (concat Q' frontier) marked' dist' prev' (inc hops))))))
