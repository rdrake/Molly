(ns molly.server.serve
  (:use compojure.core
        molly.conf.config
        molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder
        molly.util.nlp
        [molly.algo.bfs :only (bfs)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)])
  (:require [noir.response :as response]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [cemerick.shoreleave.rpc :as rpc]))

(def runtime (Runtime/getRuntime))
(def props (load-props ".properties"))
(def searcher (idx-searcher (idx-path (props :index))))

(defn dox
  [q1 field S op topk]
  (let [bq      (boolean-query
                  (concat [[q1 :and]]
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

(defn home-page []
  (response/redirect "/index.html"))

(defn get-value [q]
  (response/json
    {:result
     (dox (query :type :value)
          :text
          (clojure.string/split (q-gram q) #"\s{1}")
          :or
          (props :topk_value))}))

(defn get-entities [q]
  (response/json
    {:result
     (entities
       :text (clojure.string/lower-case q) (props :topk_entities))}))

(defn get-entity [q]
  (response/json
    {:result
     (entities :id q (props :topk_entity))}))

(defn get-span [e0 eL method]
  (let [start        (System/nanoTime)
        [visited dist prev]
        (condp = method
          "atom"  (bfs-atom searcher e0 eL)
          "ref"   (bfs-ref searcher e0 eL)
          (bfs searcher e0 eL))
        t            (- (System/nanoTime) start)
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

(defroutes app-routes
           (GET "/" [] (home-page))
           (GET "/value" [q] (get-value q))
           (GET "/entities" [q] (get-entities q))
           (GET "/entity" [q] (get-entity q))
           ;(GET "/span" [e0 eL method] (get-span e0 eL method))
           (route/files "/" {:root "resources/public"}))

(def site-handler
  (handler/site app-routes))

(def app (->
           (var site-handler)
           (rpc/wrap-rpc)
           (handler/site)))
