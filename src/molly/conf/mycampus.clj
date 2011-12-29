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
     :entity
     :courses
     (table :courses)
     :code
     [:code :title :description]
     [:title])
   (EntitySchema.
     :entity
     :instructors
     (table :instructors)
     :id
     [:name]
     [:name])
   (EntitySchema.
     :entity
     :schedules
     (table :schedules)
     :id
     [:id :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location :section_id]
     [:location])
   (EntitySchema.
     :entity
     :sections
     (table :sections)
     :id
     [:id :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course]
     [:campus :semester])
   (EntitySchema.
     :group
     "Course Section Schedules"
     (->
       (->
         (join
           (->
             (table :courses)
             (project [:code]))
           (->
             (join
               (->
                 (table :sections)
                 (project [:id :course]))
               (->
                 (table :schedules)
                 (project [:id :section_id]))
               (where (= :sections.id :section_id))))
           (where (= :code :course))))
       (project [:code [:schedules.id :as :schedule_id] [:sections.id :as :section_id]]))
     [[:courses :code "Course code"]
      [:schedules :schedule_id "Schedule ID"]
      [:sections :section_id "Section ID"]]
     []
     [])
   (EntitySchema.
     :group
     "Instructor schedules"
     (->
       (join
         (->
           (table :instructors)
           (project [[:id :as :instructor_id]]))
         (->
           (join
             (->
               (table :teaches)
               (project [[:id :as :teach_id] :schedule_id :instructor_id :position]))
             (->
               (table :schedules)
               (project [:id]))
             (where (= :schedule_id :schedules.id))))
         (where (= :instructors.id :instructor_id))))
     [[:instructors :instructor_id "Instructor ID"]
      [:schedules :schedule_id "Schedule ID"]
      [:teaches :id "Teaches ID"]]
     [:position]
     [:position])])

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
    (Lucene. idx-path)))
