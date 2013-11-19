(ns molly.algo.bfs-ref
  (:require [molly.algo.common :refer [deref-future
                                       find-adj
                                       initial-state update-state]]))

;(defn update-adj
;  [state-ref G u max-hops]
;  (let [marked?   (@state-ref :marked)
;        deferred  (if  (>= ((@state-ref :dist) u) max-hops)
;                    []
;                    (doall
;                      (for [v (find-adj G u)]
;                        (when-not (marked? v)
;                          (future (dosync (alter
;                                            state-ref
;                                            update-state
;                                            u
;                                            v
;                                            max-hops)))))))]
;    (doall (map deref-future deferred))))

(defn update-adj
  [G state-ref u max-hops]
  (println u)
  (let [deferred (for [v (find-adj G u)]
                   (when-not ((@state-ref :marked) v)
                     (future (dosync (alter state-ref
                                            update-state
                                            u v) v))))]
    (doall (map deref-future deferred))))

(defn bfs-ref
  [G s t max-hops]
  (let [state-ref (ref (initial-state s))]
    (while (seq (@state-ref :Q))
      (let [u         (first (@state-ref :Q))
            Q'        (rest (@state-ref :Q))
            frontier  (update-adj G state-ref u max-hops)]
        (dosync (alter state-ref assoc :Q (concat Q' frontier)))))

    [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
;  (let [state-ref (ref (initial-state s))]
;    (while (seq (@state-ref :Q))
;      (let [u   (first (@state-ref :Q))
;            Q'  (pop (@state-ref :Q))]
;        (dosync (alter state-ref assoc :Q Q'))
;        (if (some (fn [node] (= node t)) (@state-ref :marked))
;          (dosync (alter state-ref assoc :done true))
;          (update-adj state-ref G u max-hops))))
;     [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
