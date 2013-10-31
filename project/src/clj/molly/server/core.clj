(ns molly.server.core
  (:use molly.search.lucene)
  (:require [molly.conf.config :refer [load-props]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [files resources not-found]]
            [compojure.handler :refer [site]]))

(defroutes app-routes
           (GET "/" [] "root")
           (resources "/")
           (not-found "Can't find that one."))

(def config (load-props))
(def searcher (idx-searcher (idx-path (config :idx.path))))

(def handler
  (site app-routes))
