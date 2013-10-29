(ns molly.server.core
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [files resources not-found]]
            [compojure.handler :refer [site]]))

(defroutes app-routes
           (GET "/" [] "root")
           ;(files "/" {:root "resources/public"}))
           (resources "/")
           (not-found "Can't find that one."))

(def handler
  (site app-routes))
