(ns molly.conf.mycampus
  (:use [clojureql.core :only (table project join where rename)])
  (:import (molly.conf.config IConfig)
           (molly.datatypes.database Sqlite)
           (molly.datatypes.schema EntitySchema)))

(def schedules-table
  (->
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
      (where (= :sections.id :section_id)))))

(def schedules-id
  [[:schedules  :schedule_id]
   [:teaches    :teaches_id]
   [:sections   :section_id]])

(def mycampus-schema
  [(EntitySchema.
     {:T      :entity
      :C      :courses
      :sql    (table :courses)
      :ID     :code
      :attrs  [:code :title :description]
      :values [:code :title]})
   (EntitySchema.
     {:T      :entity
      :C      :instructors
      :sql    (table :instructors)
      :ID     :id
      :attrs  [:name]
      :values [:name]})
   (EntitySchema.
     {:T      :entity
      :C      :schedules
      :sql    (table :v_schedules)
      :ID     :id
      :attrs  [:position :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location]
      :values [:campus :location]})
   (EntitySchema.
     {:T      :group
      :C      "Instructor schedule"
      :sql    (->
                (join
                  (table :v_schedules)
                  (->
                    (table :instructors)
                    (project [:id]))
                  (where (= :instructor_id :instructors.id))))
      :ID     [[:instructors  :instructors.id "Instructor ID"]
               [:schedules    :id "Schedule ID"]]
      :attrs  []
      :values []})
   (EntitySchema.
     {:T      :group
      :C      "Course schedule"
      :sql    (->
                (join
                  (table :v_schedules)
                  (->
                    (table :courses)
                    (project [:code]))
                  (where (= :course :code))))
      :ID     [[:courses    :courses.code   "Course code"]
               [:schedules  :id     "Schedule ID"]]
      :attrs  []
      :values []})
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
