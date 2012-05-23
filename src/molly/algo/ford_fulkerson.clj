(ns molly.algo.ford-fulkerson
  (:use molly.algo.common))

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
  [G v1 seen seen-all dist prev]
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
          (let [seen-all seen-all
                [dist prev] (relax v1 v2 dist prev)
                add-to-q (if (seen v2) add-to-q (conj add-to-q v2))]
            (recur v-list (conj seen v2) seen-all dist prev add-to-q)))))))

(defn ford-fulkerson
  [G src]
  (loop [queue [src]
         seen  #{src}
         seen-all #{}
         dist  {src 0}
         prev  {src nil}]
    (if (empty? queue)
      [dist prev seen-all]
      (let [v1 (first queue)
            queue (rest queue)
            [seen seen-all dist prev add-to-q]
              (update-neighbours G v1 seen seen-all dist prev)]
        (recur (concat queue add-to-q) seen seen-all dist prev)))))
