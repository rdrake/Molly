(ns molly.web.server
  "Services requests from clients for entity/group information."
  (:gen-class)
  (:use molly.conf.config
        molly.search.api
        molly.search.lucene
        molly.util.converter)
  (:require [noir.core :as core]
            [noir.pinot.remotes :as remotes]
            [noir.response :as response]
            [noir.server :as server]))

(def paths
  {:entity "mycampus-entity.idx"
   :groups "mycampus-groups.idx"})

(def idx
  {:entity (mk-index-searcher (paths :entity))
   :groups (mk-index-searcher (paths :groups))})

(def topk 25)

(remotes/defremote suggestions
                   [q]
                   (get-suggestions (paths :entity) q topk))

(remotes/defremote entities
                   [q]
                   (map doc->entity (get-entities (idx :entity) q topk)))

; Something's broken.  This should return a single entity, not a list.  It's
; working for now at least.
(remotes/defremote entity
                   [id]
                   (map doc->entity (get-entity (idx :entity) id topk)))

(remotes/defremote groups
                   [id]
                   (map grp->lst (get-groups (idx :groups) id topk)))

; Redirect users to the actual index page.
(core/defpage "/"
         []
         (response/redirect "/index.html"))

(defn -main
  []
  (let [app-port  (get (System/getenv) "APP_PORT")
        port      (if (nil? app-port) 8000 (Integer/parseInt app-port))]
    (server/add-middleware remotes/wrap-remotes)
    (server/start port {:mode :dev :ns 'molly})))
