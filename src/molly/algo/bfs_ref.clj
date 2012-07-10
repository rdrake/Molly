(ns molly.algo.bfs-ref
  (use molly.algo.common))

(defn initial-state
  [s]
  (ref {:Q       (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
        :marked  #{s}
        :dist    {s 0}
        :prev    {s nil}
        :done    false}))

(defn update-state
  ([S-ref G u]
   (doseq [v (find-adj G u)]
     (if (not ((@S-ref :marked) v))
       (dosync
         (alter S-ref update-state G u v)))))
  ;([{Q :Q marked :marked dist :dist prev :prev} S G u v]
  ([S G u v]
   (let [Q      (S :Q)
         marked (S :marked)
         dist   (S :dist)
         prev   (S :prev)]
   (assoc S
          :Q      (conj Q v)
          :marked (conj marked v)
          :dist   (assoc dist v (inc (dist u)))
          :prev   (assoc prev v u)))))

(defn bfs-ref
  [G s accept]
  (let [S-ref (initial-state s)]
    (while (and (not (empty? (@S-ref :Q)))
                (not (@S-ref :done)))
      (let [u   (first (@S-ref :Q))
            Q   (pop (@S-ref :Q))]
        (dosync
          (alter S-ref assoc :Q Q))
        (if (accept u)
          (dosync
            (alter S-ref assoc :done true))
          (update-state S-ref G u))))
    nil))
