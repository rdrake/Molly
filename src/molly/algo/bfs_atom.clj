(ns molly.algo.bfs-atom
  (use molly.algo.common))

(defn initial-state
  [s]
  (atom {:Q       (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
         :marked  #{s}
         :dist    {s 0}
         :prev    {s nil}
         :done    false}))

(defn deref-future
  [dfd]
  (if (future? dfd)
    (deref dfd)
    dfd))

(defn update-state
  ([S-ref G u]
   (let [marked?  (@S-ref :marked)
         deferred (doall
                    (for [v (find-adj G u)]
                      (if (marked? v)
                        nil
                        (future (swap! S-ref update-state G u v)))))]
     (doall (map deref-future deferred))))
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

(defn bfs-atom
  [G s accept]
  (let [S-ref (initial-state s)]
    (while (and (not (empty? (@S-ref :Q)))
                (not (@S-ref :done)))
      (let [u   (first (@S-ref :Q))
            Q   (pop (@S-ref :Q))]
        (swap! S-ref assoc :Q Q)
        (if (accept u)
          (swap! S-ref assoc :done true)
          (update-state S-ref G u))))
    (shutdown-agents)))
