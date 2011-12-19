(ns molly.conf.mycampus
  (:use molly.conf.config
        molly.datatypes.database
        molly.datatypes.group
        molly.datatypes.index
        [clojureql.core :only (table project join where)])
  (:import (molly.datatypes.database Sqlite)
           (molly.datatypes.group Group)
           (molly.datatypes.index Lucene)))

(def tbls
  {:courses
   {:name :courses
    :sql  (->
            (table    :courses)
            (project  [[:code :as :id] :code :title :description]))}
   :instructors
   {:name :instructors
    :sql  (->
            (table    :instructors)
            (project  [:id :name]))}
   :schedules
   {:name :schedules
    :sql  (->
            (table    :schedules)
            (project  [:id :date_start :date_end :day :schedtype :hour_start :hour_end :min_start :min_end :classtype :location :section_id]))}
   :sections
   {:name :sections
    :sql  (->
            (table    :sections)
            (project  [:id :actual :campus :capacity :credits :levels :registration_start :registration_end :semester :sec_code :sec_number :year :course]))}
   :teaches
   {:name :teaches
    :sql  (->
            (table    :teaches)
            (project  [:id :schedule_id :instructor_id :position]))}})

(def grps
  [(Group.
     "Course Sections"
     (->
       (join
         ((tbls :courses) :sql)
         ((tbls :sections) :sql)
         (where (= :courses.code :sections.course))))
     [])
   (Group.
     "Instructor Schedule"
     (->
       (join
         ((tbls :instructors) :sql)
         (->
           (join
             ((tbls :schedules) :sql)
             ((tbls :teaches) :sql)
             (where (= :schedules.id :teaches.schedule_id))))
         (where (= :instructors.id :teaches.instructor_id))))
     [:teaches.position])])

(deftype Mycampus [db-path idx-path]
  IConfig
  (connection
    [this]
    (Sqlite. {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname db-path}))
  (tables
    [this]
    nil);`tbls)
  (groups
    [this]
    nil);grps)
  (index
    [this]
    (Lucene. idx-path)))
