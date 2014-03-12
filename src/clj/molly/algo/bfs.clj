(ns molly.algo.bfs
  (use clojure.set
       molly.algo.common))

(defn update-adj
  [G v1 seen visited dist prev]
  (loop [adj      (find-adj G v1)
         seen     seen
         visited  visited
         dist     dist
         prev     prev
         disc-adj []]
    (if (empty? adj)
      ; If adj is empty we've visited all of the neighbours.  Return the
      ; updated variables and mark v1 black.
      [seen (conj visited v1) dist prev disc-adj]
      (let [v2  (first adj)
            adj (rest adj)]
        (if (visited v2)
          ; Ignore v2 if we've already marked it black.
          (recur adj seen visited dist prev disc-adj)
          ; Update both the dist and prev to be + 1 and = v1.
          (let [dist    (assoc dist v2 (+ (dist v1) 1))
                prev    (assoc prev v2 v1)
                disc-adj  (if (seen v2)
                            disc-adj
                            (conj disc-adj v2))]
            ; We've seen v2, so mark it as such.
            (recur adj (conj seen v2) visited dist prev disc-adj)))))))

(defn bfs
  ([G src tgt ^Integer max-hops]
   (loop [queue    (-> (clojure.lang.PersistentQueue/EMPTY) (conj src))
          seen     #{src}
          visited  #{}
          dist     {src 0}
          prev     {src nil}]
     (if (or (empty? queue)
             (subset? #{tgt} seen)
             (>= (dist (first queue)) max-hops))
       [visited dist prev]
       (let [v1    (first queue)
             queue (rest queue)
             [seen visited dist prev adj]
             (update-adj G v1 seen visited dist prev)]
         (recur (concat queue adj) seen visited dist prev)))))
  ([G src tgt]
   (bfs G src tgt 5)))
