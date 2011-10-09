(ns molly.build-index
  (:require [clucy.core :as clucy])
  (:use molly.database
        molly.mycampus))

(def index (clucy/disk-index "entity.idx"))

(defn f
  [row]
  (clucy/add index row))

(doseq [entity (vals (config :entities))]
  (execute-query db (entity :sql) index))
