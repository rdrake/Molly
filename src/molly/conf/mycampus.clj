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
      :sql (table :schedules)
      :ID :id
      :attrs [:date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location]
      :values [:location]})
   (EntitySchema.
     {:T :entity
      :C :sections
      :sql (table :sections)
      :ID :id
      :attrs [:actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year]
      :values []})
;   (EntitySchema.
;     {:T :group
;      :C "Course Section Schedules"
;      :sql (->
;             (->
;               (join
;                 (->
;                   (table :courses)
;                   (project [:code]))
;                 (->
;                   (join
;                     (->
;                       (table :sections)
;                       (project [:id :course]))
;                     (->
;                       (table :schedules)
;                       (project [:id :section_id]))
;                     (where (= :sections.id :section_id))))
;                 (where (= :code :course))))
;             (project [:code [:schedules.id :as :schedule_id] [:sections.id :as :section_id]]))
;      :ID [[:courses :code "Course code"]
;           [:schedules :schedule_id "Schedule ID"]
;           [:sections :section_id "Section ID"]]
;      :attrs []
;      :values []
;     })
   (EntitySchema.
     {:T :group
      :C "Instructor schedules"
      :sql (->
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
      :ID [[:instructors :instructor_id "Instructor ID"]
           [:schedules :schedule_id "Schedule ID"]
           [:teaches :id "Teaches ID"]]
      :attrs [:position]
      :values [:position]
   })])

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
