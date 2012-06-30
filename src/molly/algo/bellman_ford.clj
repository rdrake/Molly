(ns molly.algo.bellman-ford
  (:use molly.algo.common
        clojure.set))

(defn need-relax? [v1 v2 dist]
  (if (dist v2)
    (> (dist v2) (+ (dist v1) 1))
    true))

(defn relax
  [v1 v2 dist prev]
    (if (need-relax? v1 v2 dist)
      [(assoc dist v2 (+ (dist v1) 1))
       (assoc prev v2 v1)]
      [dist prev]))

(defn update-queue
  [maxhops queue seen dist v ]
  (if (or (seen v) (> (dist v) maxhops)) 
    queue
    (conj queue v)))

(defn update-state 
  "update the state. The state is {:queue, :seen, :dist, :prev}"
  [state v1 v2 maxhops]
  (let [dist (state :dist)
        prev (state :prev)
        seen (state :seen)
        queue (state :queue)
        [dist' prev'] (relax v1 v2 dist prev)
        seen' (conj seen v2)
        queue' (update-queue maxhops seen dist' v2)]
    (assoc state :dist dist' :prev prev' :seen seen' :queue queue')))

(defn update-neighbours
  " state is an agent "
  [G v1 seenall *agent* ^Integer maxhops]
  (do
    (doall (doseq [v2 (neighbours G v1)]
      (send update-state *agent* v1 v2 maxhops)))
    (await *agent*)
    (conj seenall v1)))

(comment
(defn update-neighbours-old
  [G v1 seen seen-all dist prev ^Integer max-hops]
  (loop [v-list   (neighbours G v1)
         seen     seen
         seen-all seen-all
         dist     dist
         prev     prev
         add-to-q []]
    (if (empty? v-list)
      [seen (conj seen-all v1) dist prev add-to-q]
      (let [v2 (first v-list)
            v-list (rest v-list)]
        (if (seen-all v2)
          (recur v-list seen seen-all dist prev add-to-q)
          (let [[dist prev] (relax v1 v2 dist prev)
                add-to-q (if (or (seen v2) (> (dist v2) max-hops)) add-to-q (conj add-to-q v2))]
            (recur v-list (conj seen v2) seen-all dist prev add-to-q)))))))
)

(defn bellman-ford-old
  [G src tgt max-hops]
  (loop [queue [src]
         seen  #{src}
         seen-all #{}
         dist  {src 0}
         prev  {src nil}]
    (if (or (empty? queue) (and (not (nil? tgt)) (subset? #{tgt} seen)))
      [dist prev seen-all]
      (let [v1 (first queue)
            queue (rest queue)
            [seen seen-all dist prev add-to-q]
              (update-neighbours G v1 seen seen-all dist prev max-hops)]
        (recur (concat queue add-to-q) seen seen-all dist prev)))))

(defn bellman-ford
  [G src tgt ^Integer maxhops]
  (let [*agent* (agent {:queue [src]
                        :seen #{src}
                        :dist {src 0}
                        :prev {src nil}})
        seenall #{}]
    (while (or (empty? (@*agent* :queue)) (and (not (nil? tgt)) (subset? #{tgt} (@*agent* :seen))))
        (let [v1 (first (:queue @*agent*))
              q  (rest (:queue @*agent*))]
          (do
            (send *agent* (fn [state] (assoc state :queue q)))
            (await *agent*)
            (update-neighbours G v1 seenall *agent* maxhops))))
    [(:dist @*agent*) (:prev @*agent*)]))
