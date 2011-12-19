(ns molly.conf.config)

(defprotocol IConfig
  (connection [this])
  (tables [this])
  (groups [this])
  (index [this]))
