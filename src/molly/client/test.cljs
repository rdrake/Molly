(ns molly.client.test
  (:require [pinot.remotes :as remotes])
	(:require-macros [pinot.macros :as pm]))

(pm/remote (groups "instructors|75")
           [result]
					 (js/alert (result)))

(js/alert "It's working!")
