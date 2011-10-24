(ns molly.conf.config
  "Pointer to the actual configuration file."
  (:use molly.conf.mycampus))

(def config
  {:db        db
   :entities  entities})
