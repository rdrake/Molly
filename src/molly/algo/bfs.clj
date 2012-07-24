(ns molly.algo.bfs
  (use molly.algo.common))

(comment(defn bfs
  [G s t max-hops]
  (loop [Q      (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
         marked #{}
         seen   #{}
         dist   {s 0}
         prev   {s nil}]
    (if (or (empty? Q)
            (some (fn [n] (= n t)) marked))
      (let [u (peek Q)]
        (for [v (find-adj G u)]
          (recur (conj Q v) (conj marked u) (conj seen v)
                 (assoc dist v (inc (dist u)))
                 (assoc prev v u))))))))

(defn update-adj
  [G marked dist prev u max-hops]
  (loop [adj      (find-adj G u)
         marked   marked
         dist     dist
         prev     prev
         frontier []
         hops     0]
    (if (or (empty? adj)
            (>= hops max-hops))
      [(conj marked u) dist prev frontier]
      (let [v     (first adj)
            adj'  (rest adj)]
        (if (marked v)
          (recur adj' marked dist prev frontier (inc hops))
          (let [dist' (assoc dist v (inc (dist u)))
                prev' (assoc prev v u)]
            (recur adj' marked dist' prev' (conj frontier v) (inc hops))))))))

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
