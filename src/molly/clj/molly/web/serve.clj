(ns molly.web.serve
  "Acts as a layer between the Lucene wrapper and client requests."
  (:use compojure.core
        ring.adapter.jetty
        molly.search.api
        molly.search.lucene
        molly.util.converter
        clojure.data.json)
  (:require [compojure.route :as route])
  (:require [compojure.handler :as handler]))

(defn json-response
  [data]
  {:status  200
   :headers {"Content-Type" "application/json"}
   :body    (json-str data)})

(def paths
  {:entity "mycampus-entity.idx"
   :groups "mycampus-groups.idx"})

(def idx
  {:entity (mk-index-searcher (paths :entity))
   :groups (mk-index-searcher (paths :groups))})

(defn doit
  [f index q topk]
  (let [def-k   25
        max-k   (* def-k 2)
        k       (if (empty? topk)
                  def-k
                  (let [_topk (Integer/parseInt topk)]
                    (if (<= _topk max-k)
                      _topk
                      def-k)))
        results (if (empty? q)
                  '()
                  (f index q k))]
    results))

(defroutes main-routes
           (GET "/entity/"
                [q id topk]
                (let [f     (if (empty? id) get-entities get-entities-by-id)
                      query (if (empty? id) q id)]
                  (json-response
                    {:entities
                     (map doc->entity (doit f (idx :entity) query topk))})))
           (GET "/suggest/"
                [q topk]
                (json-response {:suggestions
                                (doit get-suggestions (paths :entity) q topk)}))
           (GET "/group/"
                [id topk]
                (println id " " topk)
                (json-response
                  {:groups
                   (let [results  (doit get-groups (idx :groups) id topk)
                         grp->lst (fn [grp]
                                    (clojure.string/split
                                      (.
                                        (. grp getFieldable "__content__")
                                        stringValue)
                                      #"\s+"))]
                     (map grp->lst results))})))

(def app
  (handler/site main-routes))

(println "Starting server...")
(run-jetty app {:port 8000})
