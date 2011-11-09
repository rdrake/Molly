(ns molly.client.test
  (:require [pinot.remotes :as remotes]
	          [pinot.html :as html]
	          [pinot.dom :as dom])
	(:require-macros [pinot.macros :as pm]))

(def alert (js* "alert"))
(defn log [s]
  (.log js/console s))

(def arbor js/arbor)
(def ps (. arbor ParticleSystem))

(defn add-node
  [entity]
  (. ps addNode "wut" {}))

(pm/remote (entities-by-query "ken pu")
           [results]
           (doseq [result results]
             (log result)
             (add-node result)
             (log "Is anybody there?")
             (pm/remote (groups (result :__id__))
                        [groups]
                        (doseq [group groups]
                          (doseq [entry group]
                            )))))
                            ;(log entry))))))

;(def paper (js/Raphael 0 0 500 500))
;(def circle (. paper (circle 50 50 10)))
;(. circle (attr "fill" "#f00"))
