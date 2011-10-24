(ns molly.web.serve
  "Acts as a layer between the Lucene wrapper and client requests."
  (:use compojure.core
        ring.adapter.jetty
        molly.util.lucene
        clojure.data.json)
  (:require [compojure.route :as route])
  (:require [compojure.handler :as handler]))

(defn reasonable-topk?
  [topk]
  (<= topk 50))

(defn topk-or-default
  [k]
  (if (empty? k)
    25
    (Integer/parseInt k)))

(defn search
  [q topk f]
  (let [k (topk-or-default topk)]
    (if (reasonable-topk? k)
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (json-str {:data (f q)})}
      {:status  400
       :headers {"Content-Type" "text/html"}
       :body    (str "<p>There was a problem handling your request.  " +
                     "Please ensure all parameters have been " +
                     "correctly specified.</p>")})))

(defroutes main-routes
           (GET "/entity/"
                [q topk]
                (search q topk println))
           (GET "/value/"
                [q topk]
                (search q topk println)))

(def app
  (handler/site main-routes))

(run-jetty app {:port 8000})
