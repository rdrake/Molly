(ns molly.algo.bfs-atom
  (use clojure.set
       molly.algo.common))

(defn make-state [src]
  "Creates the initial state of the search."
  (atom {:queue   (-> (clojure.lang.PersistentQueue/EMPTY) (conj src))
         :visited #{src}
         :dist    {src 0}
         :prev    {}
         :found   false}))

(defn update-state
  "Updates the state of the atom.  These operations are done one at a time in the single-threaded version."
  [S v1 v2]
  (let [queue   (S :queue)
        visited (S :visited)
        dist    (S :dist)
        prev    (S :prev)]
    (assoc S
           :queue   (conj queue v2)
           :visited (conj visited v2)
           :dist    (assoc dist v2 (inc (dist v1)))
           :prev    (assoc prev v2 v1))))

(defn deref-future
  "Returns the dereferenced version of the input if it's a future, otherwise returns the input."
  [dfd]
  (if (future? dfd) @dfd dfd))

(defn process-adj
  [S adj v1]
  (let [visited?  (@S :visited)
        deferred  (doall
                    (for [v2 adj]
                      (if (visited? v2)
                        nil
                        (future (swap! S update-state v1 v2)))))]
    (doall (map deref-future deferred))))

(defn bfs-atom
  ([G src tgt ^Integer max-hops]
   (let [S (make-state src)]
     (while (and (not (empty? (@S :queue)))
                 (not (@S :found)))
       (let [v1  (first (@S :queue))
             q'  (pop   (@S :queue))]
         (swap! S assoc :queue q')
         (if (or (subset? #{tgt} (@S :visited))
                 (>= ((@S :dist) v1) max-hops))
           (swap! S assoc :found true)
           (process-adj S (find-adj G v1) v1))))
     [(@S :visited) (@S :dist) (@S :prev)]))
  ([G src tgt]
   (bfs-atom G src tgt 5)))
