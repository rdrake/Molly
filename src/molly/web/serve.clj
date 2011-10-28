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
   :body    (json-str {:data data})})

(def path "mycampus-entity.idx")
(def idx (mk-index-searcher path))

(defroutes main-routes
           (GET "/entity/"
                [q topk]
                (json-response (map doc->entity (get-entities idx q (topk-or-default topk)))))
           (GET "/suggest/"
                [q topk]
                (json-response (get-suggestions path q (topk-or-default topk)))))

(def app
  (handler/site main-routes))

(run-jetty app {:port 8000})
