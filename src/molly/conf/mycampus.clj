(ns molly.conf.mycampus
  "Configuration file for the mycampus dataset."
	(:require [clojureql.core :as cql]))

(def db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"})

(def entities
  [{:name   :course
    :id     :id
    :sql    (->
              (cql/table :courses)
              (cql/project [[:code :as :id] :code :title :description]))
    :values [:code :title]}
   {:name   :schedule
    :id     :id
    :sql    (->
              (cql/join
                (->
                  (cql/table :schedules)
                  (cql/project [:id :date_start :date_end :hour_start
                                :min_start :hour_end :min_end
                                :location]))
                (->
                  (cql/table :sections)
                  (cql/project [:id :campus]))
                (cql/where (= :schedules.id :sections.id))))
    :values [:location]}
   {:name   :person
    :id     :id
    :sql    (->
              (cql/table :instructors)
              (cql/project [:id :name]))
    :values [:name]}])
