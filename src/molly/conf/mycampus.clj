(ns molly.conf.mycampus
  "Configuration file for the mycampus dataset."
	(:require [clojureql.core :as cql]))

(def db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"})

(def tables
  {:courses     (->
                  (cql/table    :courses)
                  (cql/project  [[:code :as :course_id] :code :title
                                 :description]))
   :section     (->
                  (cql/join
                    (->
                      (cql/join
                        (->
                          (cql/table    :schedules)
                          (cql/project  [:id [:id :as :schedules_id] :date_start
                                         :date_end :day :schedType :hour_start
                                         :hour_end :min_start :min_end
                                         :classtype :location :section_id]))
                        (->
                          (cql/table    :sections)
                          (cql/project  [[:id :as :sections_id] :actual :campus
                                         :capacity :credits :levels
                                         :registration_start
                                         :registration_end :semester :sec_code
                                         :sec_number :year :course]))
                        (cql/where (= :section_id :sections_id))))
                    (->
                      (cql/table    :teaches)
                      (cql/project  [[:id :as :teaches_id] :schedule_id
                                     :position :instructor_id]))
                    (cql/where (= :schedule_id :schedules_id))))
   :instructors (->
                  (cql/table    :instructors)
                  (cql/project  [[:id :as :instructors_id] :name]))})

(def entities
  [{:name   :courses
    :id     :code
    :sql    (tables :courses)
    :values [:code :title]}
   {:name   :section
    :id     :schedule_id
    :sql    (tables :section)
    :values [:location :semester]}
   {:name   :instructors
    :id     :id
    :sql    (tables :instructors)
    :values [:name]}])

(def hierarchy
  {:ids       [[:courses     :course_id]
               [:section     :schedules_id]
               [:instructors :instructors_id]]
   :top-level {:id    :code
               :sql   (->
                        (tables :courses)
                        (cql/project :code))}
   :sql       (->
                (cql/join
                  (tables :courses)
                  (->
                    (cql/join
                      (tables :section)
                      (tables :instructors)
                      (cql/where (= :instructor_id :instructors_id))))
                  (cql/where (= :course_id :course))))})
