(ns molly.mycampus
	(:require [clojureql.core :as cql]
           [clucy.core :as clucy]))

(def dataset-name
  ;^{:private true}
  "mycampus")

(def db
  ;^{:private true}
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname     (str "data/" dataset-name ".sq3")})

(def entities
  ;^{:private true}
  {:course
     {:sql (->
             (cql/table :courses)
             (cql/project [[:code :as :id] :title :description]))
      :values [:code :title :desc]}
   :schedule
     {:sql (->
             (cql/join
               (->
                 (cql/table :schedules)
                 (cql/project [:id :date_start :date_end :hour_start :min_start :hour_end :min_end :location]))
               (->
                 (cql/table :sections)
                 (cql/project [:id :campus]))
              (cql/where (= :schedules.id :sections.id))))
      :values [:location :campus]}
   :person
     {:sql (->
             (cql/table :instructors)
             (cql/project [:id :name]))
      :values [:name]}})

(def indices
  ;^{:private true}
  {:value   (clucy/disk-index (str dataset-name "-value.idx"))
   :entity  (clucy/disk-index (str dataset-name "-entity.idx"))
   :group   (clucy/disk-index (str dataset-name "-group.idx"))})

(def config
  {:db db
   :entities entities
   :indices indices})

(println (config :db))
