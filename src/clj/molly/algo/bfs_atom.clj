(ns molly.algo.bfs-atom
  (:require [molly.algo.common :refer [deref-future
                                       find-adj
                                       initial-state update-state]]))

(defn update-adj
  [G state-ref u max-hops]
  ;(if (or (empty? (
  (let [marked?   (@state-ref :marked)
        done?     (@state-ref :done)
        deferred  (if done?
                    []
                    (doall
                      (for [v (find-adj G u)]
                        (when-not (marked? v)
                          (future
                            (swap!
                              state-ref
                              update-state
                              u
                              v
                              max-hops))))))]
    (doall (map deref-future deferred))))

(defn bfs-atom
  [G s t max-hops]
  (let [state-ref (atom (initial-state s))]
    (while (and (seq (@state-ref :Q))
                (not (@state-ref :done)))
      (let [u     (first (@state-ref :Q))
            Q'    (pop (@state-ref :Q))]
        (swap! state-ref assoc :Q Q')
        ;(if (some (fn [node] (= node t)) (@state-ref :marked))
        ;  (swap! state-ref assoc :done true)
          (update-adj state-ref G u max-hops)));)
    [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
