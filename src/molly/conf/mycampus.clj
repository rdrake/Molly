(ns molly.conf.mycampus
  (:use molly.conf.config
        molly.datatypes.database
        molly.datatypes.index
        molly.datatypes.schema
        [clojureql.core :only (table project join where rename)])
  (:import (molly.datatypes.database Sqlite)
           (molly.datatypes.index Lucene)
           (molly.datatypes.schema EntitySchema)))

(def mycampus-schema
  [(EntitySchema.
     {:T :entity
      :C :courses
      :sql (table :courses)
      :ID :code
      :attrs [:code :title :description]
      :values [:title]})
   (EntitySchema.
     {:T :entity
      :C :instructors
      :sql (table :instructors)
      :ID :id
      :attrs [:name]
      :values [:name]})
   (EntitySchema.
     {:T :entity
      :C :schedules
      :sql    (->
                (join
                  (->
                    (table :sections)
                    (project [[:id :as :sec_id] [:id :as :section_id] :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course]))
                  (->
                    (join
                      (->
                        (table :schedules)
                        (project [[:id :as :sch_id] :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location]))
                      (->
                        (table :teaches)
                        (project [:position :teaches.schedule_id :teaches.instructor_id [:id :as :teaches_id]]))
                      (where (= :schedules.id :teaches.schedule_id))))
                  (where (= :sections.id :section_id))))
      :ID       [[:schedules  :schedule_id]
                 [:teaches    :teaches_id]
                 [:sections   :section_id]]
      :attrs    [:position :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location]
      :values   [:teaches.position :campus :schedules.location]})
  ])

(deftype Mycampus [db-path idx-path]
  IConfig
  (connection
    [this]
    (Sqlite. {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname db-path}))
  (schema
    [this]
    mycampus-schema)
  (index
    [this]
    idx-path))
