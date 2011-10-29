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

(defn topk-or-default
  [k]
  (let [default-topk 25]
    (if (empty? k)
      default-topk
      (let [topk (Integer/parseInt k)]
        (if (<= topk 50)
          topk
          default-topk)))))

(defn json-response
  [data]
  {:status  200
   :headers {"Content-Type" "application/json"}
   :body    (json-str data)})

(def path "mycampus-entity.idx")
(def idx (mk-index-searcher path))

(defroutes main-routes
           (GET "/entity/"
                [q topk]
                (let [k (topk-or-default topk)]
                  (json-response
                    {:entities (map doc->entity (get-entities idx q k))})))
           (GET "/suggest/"
                [q topk]
                (let [k (topk-or-default topk)]
                  (json-response {:suggestions (get-suggestions path q k)}))))

(def app
  (handler/site main-routes))

(run-jetty app {:port 8000})
