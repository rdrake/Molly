(ns molly.server.search
  (:use molly.search.lucene
        molly.search.query-builder
        molly.util.nlp
        molly.datatypes.entity
        [molly.server.core :refer [config searcher]]
        [molly.algo.bfs :only (bfs)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)]
        [molly.algo.ford-fulkerson :only (ford-fulkerson)]))

(def runtime (Runtime/getRuntime))

(defn dox
  [q field S op topk]
  (let [bq      (boolean-query
                  (concat [[q :and]]
                          (for [s S]
                            [(query field s) op])))
        result  (map doc->data (idx-search searcher bq topk))
        fmt     (fn [data] {:meta (meta data) :results data})]
    (map fmt result)))

(defn entities
  [field q topk]
  (dox (query :type :entity)
       field
       (clojure.string/split q #"\s{1}")
       :and
       topk))

(defn find-value [q]
  (dox (query :type :value)
       :text
       (clojure.string/split (q-gram q) #"\s{1}")
       :or
       (config :idx.topk.value)))

(defn find-entities [q]
  (entities
    :text (clojure.string/lower-case q)
    (config :idx.topk.entities)))

(defn find-entity [id]
  (entities :id id (config :idx.topk.entity)))

(defn compute-span [s t method]
  (let [max-hops (config :idx.search.max-hops)
        start         (System/nanoTime)
        [visited dist prev]
        (condp = method
          "bfs"   (bfs searcher s t max-hops)
          "atom"  (bfs-atom searcher s t max-hops)
          "ref"   (bfs-ref searcher s t max-hops)
          "ff"    (ford-fulkerson searcher s t max-hops))
        time-taken    (- (System/nanoTime) start)
        eids          (conj (for [[k v] prev] k) s)
        get-entities  (fn [eid]
                        {(keyword eid)
                         (entities :id eid
                                   (config :idx.topk.entity))})
        entities      (into {} (map get-entities eids))]
    {:from      s
     :to        t
     :prev      prev
     :entities  entities
     :debug     {:time        time-taken
                 :mem_total   (.totalMemory runtime)
                 :mem_free    (.freeMemory runtime)
                 :mem_used    (- (.totalMemory runtime)
                               (.freeMemory runtime))
                 :properties  config}}))
