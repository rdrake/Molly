(ns molly.algo.bfs-atom
  (use molly.algo.common))

(defn initial-state
  [s]
  (atom {:Q       (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
         :marked  #{s}
         :dist    {s 0}
         :prev    {}
         :done    false}))

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

(defn deref-future
  [dfd]
  (if (future? dfd)
    (deref dfd)
    dfd))

(defn update-adj
  [state-ref G u]
  (let [marked?   (@state-ref :marked)
        deferred  (doall
                    (for [v (find-adj G u)]
                      (if (marked? v)
                        nil
                        (future
                          (swap! state-ref update-state u v)))))]
    (doall (map deref-future deferred))))

(defn bfs-atom
  [G s t]
  (let [state-ref (initial-state s)]
    (while (and (not (empty? (@state-ref :Q)))
                (not (@state-ref :done)))
      (let [u     (first (@state-ref :Q))
            Q'    (pop (@state-ref :Q))]
        (swap! state-ref assoc :Q Q')
        (if (some (fn [node] (= node t)) (@state-ref :marked))
          (swap! state-ref assoc :done true)
          (update-adj state-ref G u))))
    [(@state-ref :marked) (@state-ref :dist) (@state-ref :prev)]))
