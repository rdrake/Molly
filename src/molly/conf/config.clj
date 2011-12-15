(ns molly.conf.config)

(defprotocol Config
  (connection [this])
  (tables [this])
  (index [this]))
