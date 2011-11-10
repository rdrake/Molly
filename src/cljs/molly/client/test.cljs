(ns molly.client.test
  (:require [pinot.remotes :as remotes]
	          [pinot.html :as html]
	          [pinot.dom :as dom]
            [pinot.draw.visualization :as vis])
	(:require-macros [pinot.macros :as pm]))

(def alert (js* "alert"))
(defn log [s]
  (.log js/console s))

(def ParticleSystem (js* "arbor.ParticleSystem"))
(def Renderer (js* "Renderer"))
(def parts (ParticleSystem. 1000 600 0.5))

(set! (. parts renderer) (Renderer. "#content"))

(defn add-node
  [entity]
  (let [id (entity :__id__)]
    (. parts addNode id)))

(defn add-node-from-id
  [ent-id]
  (pm/remote (entity ent-id)
             [e]
             (if (not (empty? e))
               (add-node (nth e 0))
               ; NOP
               nil)))

(defn add-edge
  [from to]
  (. parts addEdge from to))

(defn add-to-graph
  [ent-id entry]
  (add-node-from-id entry)
  (add-edge ent-id entry))

(defn expand-entity
  [ent-id]
  (add-node-from-id ent-id)
  (pm/remote (groups ent-id)
             [groups]
             (doseq [group groups]
               (let [gid (clojure.string/join "" group)]
                 (add-to-graph ent-id gid)
                 (doseq [e group]
                   (if (not (= ent-id e))
                     (add-to-graph gid e)
                     nil))))))

(expand-entity "instructors|75")

;(def paper (js/Raphael 0 0 500 500))
;(def circle (. paper (circle 50 50 10)))
;(. circle (attr "fill" "#f00"))

(def jquery (js* "$"))
(jquery
  (fn []
    (->
      (jquery "#content")
      (.html "wut")
      (.append "<div>lol</div>"))))
