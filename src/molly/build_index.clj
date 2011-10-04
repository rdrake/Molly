(ns molly.build-index
  (:use molly.database
        molly.mycampus))

(defn f
  [m]
  (println (m :id)))

(doseq [entity (vals (config :entities))]
  (execute-query db (entity :sql) f))
