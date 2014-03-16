(ns molly.algo.bfs-ref
  (use molly.algo.common))

(defn update-state
  [state u v]
  (let [Q       (state :Q)
        marked  (state :marked)
        dist    (state :dist)
        prev    (state :prev)]
    (assoc state
           :Q       (conj Q v)
           :marked  (conj marked v)
           :dist    (assoc dist v (inc (dist u)))
           :prev    (assoc prev v u))))

(defn update-adj
  [state-ref G u]
  (let [marked?   (@state-ref :marked)
        deferred  (doall
                    (for [v (find-adj G u)]
                      (if (marked? v)
                        nil
                        (future (dosync (alter
                                          state-ref
                                          update-state
                                          u
                                          v))))))]
    (doall (map deref-future deferred))))

(defn bfs-ref
  [G s t]
  (let [state-ref (ref (initial-state s))]
    (while (and (not (empty? (@state-ref :Q)))
                (nil? ((@state-ref :marked) t)))
      (let [u   (first (@state-ref :Q))
            Q'  (pop (@state-ref :Q))]
        (dosync (alter state-ref assoc :Q Q'))
        (update-adj state-ref G u)))
     [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
