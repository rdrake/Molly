(ns molly.conf.mycampus
  "Configuration file for the mycampus dataset."
	(:require [clojureql.core :as cql]))

(def db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"})

(def tables
  {:courses     (->
                  (cql/table    :courses)
                  (cql/project  [[:code :as :id] :code :title :description]))
   :schedules   (->
                  (cql/table    :schedules)
                  (cql/project  [:id :date_start :date_end :day :schedtype
                                 :hour_start :hour_end :min_start :min_end
                                 :classtype :location :section_id]))
   :sections    (->
                  (cql/table    :sections)
                  (cql/project  [:id :actual :campus :capacity :credits :levels
                                 :registration_start :registration_end :semester
                                 :sec_code :sec_number :year :course]))
   :teaches     (->
                  (cql/table    :teaches)
                  (cql/project  [:id :schedule_id :position]))
   :instructors (->
                  (cql/table    :instructors)
                  (cql/project  [:id :name]))})

(def entities
  [{:name   :courses
    :id     :code
    :sql    (tables :courses)
    :values [:code :title]}
   {:name   :schedules
    :id     :id
    :sql    (tables :schedules)
    :values [:location]}
   {:name   :sections
    :id     :id
    :sql    (tables :sections)
    :values [:semester]}
   {:name   :teaches
    :id     :id
    :sql    (tables :teaches)
    :values []}
   {:name   :instructors
    :id     :id
    :sql    (tables :instructors)
    :values [:name]}])

(def hierarchy
  {:ids  [[:courses     :courses_id]
          [:sections    :sections_id]
          [:schedules   :schedules_id]
          [:teaches     :teaches_id]
          [:instructors :instructors_id]]
   :sql  (->
           (cql/join
             (->
               (cql/table   :courses)
               (cql/project [[:code :as :courses_id]]))
               (->
                 (cql/join
                   (->
                     (cql/table   :sections)
                     (cql/project [[:id :as :sections_id] :course]))
                     (->
                       (cql/join
                         (->
                           (cql/table   :schedules)
                           (cql/project [[:id :as :schedules_id] :section_id]))
                           (->
                             (cql/join
                               (->
                                 (cql/table   :teaches)
                                 (cql/project [[:id :as :teaches_id]
                                               :instructor_id]))
                               (->
                                 (cql/table   :instructors)
                                 (cql/project [[:id :as :instructors_id]]))
                               (cql/where
                                 (= :instructor_id :instructors_id))))
                         (cql/where (= :schedules_id :schedule_id))))
                   (cql/where (= :sections_id :section_id))))
             (cql/where (= :courses_id :course))))})
