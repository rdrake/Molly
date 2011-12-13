(ns molly.client.test
  (:require [pinot.remotes :as remotes]
	          [pinot.html :as html]
	          [pinot.dom :as dom]
            [pinot.draw.visualization :as vis])
	(:require-macros [pinot.macros :as pm]))

(def alert (js* "alert"))
(defn log [s]
  (.log js/console s))

(defn rand-color
  []
  (let [n-clr 256
        rnd   {:r (rand-int n-clr) :g (rand-int n-clr) :b (rand-int n-clr)}
        mix   {:r (dec n-clr) :g (dec n-clr) :b (dec n-clr)}
        final {:r (/ (+ (rnd :r) (mix :r)) 2)
               :g (/ (+ (rnd :g) (mix :g)) 2)
               :b (/ (+ (rnd :b) (mix :b)) 2)}]
    (str "rgba(" (final :r) "," (final :g) "," (final :b) ",1)")))

(def ParticleSystem (js* "arbor.ParticleSystem"))
(def Renderer (js* "Renderer"))
(def parts (ParticleSystem. 1000 600 0.5))

(set! (. parts renderer) (Renderer. "#content"))

(defn map->jsobj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (.strobj (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (map->jsobj v)]
                               [k v])))
                         obj))))

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
  [from to color]
  (. parts addEdge from to (map->jsobj {:color color})))

(defn add-to-graph
  [ent-id entry color]
  (add-node-from-id entry)
  (add-edge ent-id entry color))

(defn expand-entity
  [ent-id]
  (add-node-from-id ent-id)
  (pm/remote (groups ent-id)
             [groups]
             (doseq [group groups]
               (let [gid    (clojure.string/join "" group)
                     color  (rand-color)]
                 (add-to-graph ent-id gid color)
                 (doseq [e group]
                   (if (not (= ent-id e))
                     (add-to-graph gid e color)
                     nil))))))

(expand-entity "instructors|74")

(def jquery (js* "$"))
(jquery
  (fn []
    (->
      (jquery "#content")
      (.html "wut")
      (.append "<div>lol</div>"))))
