(ns molly.conf.config
  "Pointer to the actual configuration file."
  (:use molly.conf.mycampus))

(def config
  {:db        db
   :entities  entities})

(defn all-value-fields
  []
  (distinct
    (flatten
      (for [ent-def (config :entities)]
        (for [value (ent-def :values)]
          (name value))))))
