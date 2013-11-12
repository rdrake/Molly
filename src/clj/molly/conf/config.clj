(ns molly.conf.config
  (:use propertea.core))

(defn load-props
  ([]
   (load-props "config/molly.properties"))
  ([file-name]
   (read-properties file-name
                    :parse-int  [:idx.topk.value
                                 :idx.topk.entities
                                 :idx.topk.entity
                                 :idx.search.max-hops]
                    :required   [:db.path
                                 :idx.path])))

(defprotocol IConfig
  (connection [this])
  (schema [this])
  (index [this]))
