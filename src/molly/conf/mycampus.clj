(ns molly.conf.mycampus
  (:use molly.conf.config
        molly.datatypes.index)
  (:import (molly.conf.config Config)
           (molly.datatypes.index Lucene)))

(deftype Mycampus [db-path idx-path]
  Config
  (connection
    [this]
    {:classname "org.sqlite.JDBC"
     :subprotocol "sqlite"
     :subname db-path})
  (tables
    [this]
    (println "Tables"))
  (index
    [this]
    (Lucene. idx-path)))
