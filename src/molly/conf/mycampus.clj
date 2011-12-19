(ns molly.conf.mycampus
  (:use molly.conf.config
        molly.datatypes.database
        molly.datatypes.group
        molly.datatypes.index
        [clojureql.core :only (table project join where rename)])
  (:import (molly.datatypes.database Sqlite)
           (molly.datatypes.group Group)
           (molly.datatypes.index Lucene)))

(def tbls
  {:courses
   {:name :courses
    :id   :code
    :sql  (->
            (table    :courses)
            (project  [:code :title :description]))}
   :instructors
   {:name :instructors
    :id   :id
    :sql  (->
            (table    :instructors)
            (project  [:id :name]))}
   :schedules
   {:name :schedules
    :id   :id
    :sql  (->
            (table    :schedules)
            (project  [:id :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location :section_id]))}
   :sections
   {:name :sections
    :id   :id
    :sql  (->
            (table    :sections)
            (project  [:id :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course]))}
   :teaches
   {:name :teaches
    :id   :id
    :sql  (->
            (table    :teaches)
            (project  [:id :schedule_id :instructor_id :position]))}})

(def grps
  [(Group.
     "Course Sections"
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
     [[:courses :code]
      [:schedules :schedule_id]
      [:sections :section_id]]
     [])
   (Group.
     "Instructor Schedule"
     (->
       (->
         (join
           (->
             (table :instructors)
             (project [:id]))
           (->
             (join
               (->
                 (table :teaches)
                 (project [:schedule_id :instructor_id :position]))
               (->
                 (table :schedules)
                 (project [:id]))
               (where (= :schedule_id :schedules.id))))
           (where (= :instructors.id :instructor_id))))
       (project [:teaches.instructor_id :teaches.schedule_id [:teaches.id :as :teach_id]]))
     [[:instructors :instructor.id]
      [:schedules :teaches.schedule_id]
      [:teaches :teaches.teach_id]]
     [])])

(deftype Mycampus [db-path idx-path]
  IConfig
  (connection
    [this]
    (Sqlite. {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname db-path}))
  (tables
    [this]
    tbls)
  (groups
    [this]
    grps)
  (index
    [this]
    (Lucene. idx-path)))
