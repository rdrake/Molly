(ns molly.conf.config)

(defprotocol IConfig
  (connection [this])
  (schema [this])
  (index [this]))
