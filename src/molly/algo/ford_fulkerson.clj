(ns molly.algo.ford-fulkerson
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

(defn update-neighbours
  [G v1 seen seen-all dist prev ^Integer max-hops]
  (loop [v-list   (find-adj G v1)
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

(defn ford-fulkerson
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
