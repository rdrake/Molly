(ns molly.web.server
  (:use molly.conf.config
        molly.search.api
        molly.search.lucene
        molly.util.converter)
  (:require [noir.server :as server]
            [noir.pinot.remotes :as remotes]))

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

(remotes/defremote entities-by-query
                   [q]
                   (map doc->entity (get-entities (idx :entity) q topk)))

(remotes/defremote entities-by-id
                   [id]
                   (get-entities-by-id (idx :groups) id topk))

(remotes/defremote groups
                   [id]
                   (map grp->lst (get-groups (idx :groups) id topk)))

(server/add-middleware remotes/wrap-remotes)
(server/start 8000 {:mode :dev :ns 'molly})
