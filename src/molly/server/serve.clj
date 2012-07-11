(ns molly.server.serve
  (:use noir.core
        molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder
        molly.util.nlp
        [molly.algo.bfs :only (bfs)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)])
  (:require [noir.server :as server]
            [noir.response :as response]))

(def runtime (Runtime/getRuntime))

(defn start!
  [props]
  (let [searcher (idx-searcher (idx-path (props :index)))]
    (defn dox
      [q1 field S op topk]
      (let [bq      (boolean-query
                      (concat [[q1 :and]]
                              (for [s S]
                                [(query field s) op])))
            result  (map doc->data (idx-search searcher bq topk))
            wat     (fn [data] {:meta (meta data) :results data})]
        (map wat result)))

    (defn entities
      [field q topk]
      (dox (query :type :entity)
           field
           (clojure.string/split q #"\s{1}")
           :and
           topk))

    (defpage "/" []
             (response/redirect "/index.html"))

    (defpage "/value" {:keys [q]}
             (response/json
               {:result
                (dox (query :type :value)
                     :text
                     (clojure.string/split (q-gram q) #"\s{1}")
                     :or
                     (props :topk_value))}))

    (defpage "/entities" {:keys [q]}
             (response/json
               {:result
                (entities :text q (props :topk_entities))}))

    (defpage "/entity" {:keys [q]}
             (response/json
               {:result
                (entities :id q (props :topk_entity))}))

    (defpage "/span" {:keys [e0 eL method]}
             (let [start        (System/currentTimeMillis)
                   accept       (fn [args]
                                  (let [[marked hops] args]
                                    (or (some (fn [x]
                                                (= x eL)) marked)
                                        (>= hops 25))))
                   [visited dist prev]
                      (bfs searcher e0 accept)
                   t            (- (System/currentTimeMillis) start)
                   eids         (for [[k v] prev] k)
                   get-entities (fn [eid]
                                  {(keyword eid)
                                   (entities :id eid
                                             (props :topk_entity))})
                   entities     (into {} (map get-entities eids))]
              (response/json
                 {:from     e0
                  :to       eL
                  :prev     prev
                  :entities entities
                  :debug    {:time t
                             :mem_total  (.totalMemory runtime)
                             :mem_free   (.freeMemory runtime)
                             :mem_used   (- (.totalMemory runtime)
                                            (.freeMemory runtime))
                             :properties props}})))

    (server/start 8080)))
