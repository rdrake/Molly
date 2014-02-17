(ns molly.algo.bfs
  (:require [molly.algo.common :refer [find-adj initial-state
                                       update-state]]))

(defn update-adj
  [state-ref G u max-hops]
  (let [marked?   (@state-ref :marked)
        deferred  (doall
                    (for [v (find-adj G u)]
                      (when-not (marked? v)
                        (swap!
                          state-ref
                          update-state
                          u
                          v
                          max-hops))))]))

(defn bfs
  [G s t max-hops]
  (let [state-ref (atom (initial-state s t))]
    (while (and (seq (@state-ref :Q))
                (not (@state-ref :done)))
      (let [u     (first (@state-ref :Q))
            Q'    (pop (@state-ref :Q))]
        (swap! state-ref assoc :Q Q')
        (update-adj state-ref G u max-hops)))
    [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
