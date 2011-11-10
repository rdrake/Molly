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

(def topk 10)

(remotes/defremote suggestions
                   [q]
                   (get-suggestions (paths :entity) q topk))

(remotes/defremote entities
                   [q]
                   (map doc->entity (get-entities (idx :entity) q topk)))

; Something's broken.  This shoudl return a single entity, not a list.  It's
; working for now at least.
(remotes/defremote entity
                   [id]
                   (map doc->entity (get-entity (idx :entity) id topk)))

(remotes/defremote groups
                   [id]
                   (map grp->lst (get-groups (idx :groups) id topk)))

(server/add-middleware remotes/wrap-remotes)
(server/start 8000 {:mode :dev :ns 'molly})
