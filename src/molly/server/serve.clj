(ns molly.server.serve
  (:use noir.core)
  (:require [noir.server :as server]))

(defpage "/"
         []
         "O HAI")

(server/start 8080)
