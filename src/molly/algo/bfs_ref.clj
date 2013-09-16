(ns molly.algo.bfs-ref
  (use molly.algo.common))

(defn update-adj
  [state-ref G u max-hops]
  (let [marked?   (@state-ref :marked)
        deferred  (doall
                    (for [v (find-adj G u)]
                      (if (marked? v)
                        nil
                        (future (dosync (alter
                                          state-ref
                                          update-state
                                          u
                                          v
                                          max-hops))))))]
    (doall (map deref-future deferred))))

(defn bfs-ref
  [G s t max-hops]
  (let [state-ref (ref (initial-state s))]
    (while (and (not (empty? (@state-ref :Q)))
                (not (@state-ref :done)))
      (let [u   (first (@state-ref :Q))
            Q'  (pop (@state-ref :Q))]
        (dosync (alter state-ref assoc :Q Q'))
        (if (some (fn [node] (= node t)) (@state-ref :marked))
          (dosync (alter state-ref assoc :done true))
          (update-adj state-ref G u max-hops))))
     [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
