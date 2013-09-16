(ns molly.algo.common-test
  (use clojure.test
       molly.conf.config
       molly.search.lucene
       [molly.algo.bfs-atom :only (bfs-atom)]
       [molly.algo.bfs-ref :only (bfs-ref)]
       [molly.algo.bfs :only (bfs)]
       [molly.algo.ford-fulkerson :only (ford-fulkerson)]))

(def properties (load-props ".properties"))
(def G (idx-searcher (idx-path (properties :index))))
(def s "instructor|108")
(def t "instructor|109")
(def max-hops 1)

(deftest identical-output-bfs
         (let [[marked dist prev] (bfs G s t max-hops)
               [marked-con dist-con prev-con] (bfs-atom G s t max-hops)]
           (is (= marked marked-con))
           (is (= dist dist-con))
           (is (= prev prev-con))))
