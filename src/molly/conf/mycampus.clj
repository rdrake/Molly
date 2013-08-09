(ns molly.conf.mycampus
  (:use molly.conf.config
        molly.datatypes.database
        molly.datatypes.schema
        korma.core
        korma.db)
  (:import (molly.datatypes.database Sqlite)
           (molly.datatypes.schema EntitySchema)))

(declare Campus Course Subject Term Section Schedule
         Location Instructor db-conn)

(defentity Campus
           (has-many Location))

(defentity Location
           (belongs-to Campus))

(defentity Subject
           (has-many Course))

(defentity Course
           (pk :code)
           (belongs-to Subject)
           (has-many Section))

(defentity Instructor
           (has-many Schedule))

(defentity Term
           (has-many Section))

(defentity Section
           (pk :crn)
           (has-many Schedule)
           (belongs-to Term)
           (belongs-to Course {:fk :course_code}))

(defentity Schedule
           (belongs-to Section)
           (belongs-to Instructor)
           (belongs-to Location))

(def mycampus-schema
  [(EntitySchema.
     {:T      :entity
      :C      :course
      :sql    Course
      :ID     :code
      :attrs  [:code :title]
      :values [:code :title]})
   (EntitySchema.
     {:T      :entity
      :C      :instructor
      :sql    Instructor
      :ID     :id
      :attrs  [:name]
      :values [:name]})
   (EntitySchema.
     {:T      :entity
      :C      :location
      :sql    Location
      :ID     :id
      :attrs  [:name]
      :values [:name]})
   (EntitySchema.
     {:T      :entity
      :C      :subject
      :sql    Subject
      :ID     :id
      :attrs  [:id :name]
      :values [:id :name]})
   (EntitySchema.
     {:T      :entity
      :C      :campus
      :sql    Campus
      :ID     :id
      :attrs  [:name]
      :values [:name]})
   (EntitySchema.
     {:T      :entity
      :C      :term
      :sql    Term
      :ID     :id
      :attrs  [:id :name]
      :values [:id :name]})
   (EntitySchema.
     {:T      :entity
      :C      :section
      :sql    Section
      :ID     :crn
      :attrs  [:crn :reg_start :reg_end :credits
               :section_num :levels]
      :values [:crn]})
   (EntitySchema.
     {:T      :entity
      :C      :schedule
      :sql    Schedule
      :ID     :id
      :attrs  [:days :sch_type :date_start :date_end
               :time_start :time_end :week]
      :values []})
   (EntitySchema.
     {:T      :group
      :C      "Instructor schedule"
      :sql    (->
                (select* Schedule)
                (with Instructor))
      :ID     [[:instructor :instructor_id  "Instructor ID"]
               [:schedule   :id             "Schedule ID"]]
      :attrs  []
      :values []})
   (EntitySchema.
     {:T      :group
      :C      "Course schedule"
      :sql    (->
                (select* Schedule)
                (with Section
                      (with Course)))
      :ID     [[:section  :crn  "CRN"]
               [:course   :code "Code"]
               [:schedule :id   "Schedule ID"]]
      :attrs  []
      :values []})
   (EntitySchema.
     {:T      :group
      :C      "Schedule location"
      :sql    (->
                (select* Schedule)
                (with Location
                      (with Campus)))
      :ID     [[:campus   :campus_id    "Campus ID"]
               [:location :location_id  "Location ID"]
               [:schedule :id           "Schedule ID"]]
      :attrs  []
      :values []})
   (EntitySchema.
     {:T      :group
      :C      "Course subject"
      :sql    (->
                (select* Course)
                (with Subject))
      :ID     [[:course   :id         "Course"]
               [:subject  :subject_id "Subject"]]
      :attrs  []
      :values []})
   (EntitySchema.
     {:T     :group
      :C     "Section term"
      :sql   (->
               (select* Section)
               (with Term))
      :ID    [[:section  :id       "Section"]
              [:term     :term_id  "Term"]]})
   ])

(deftype Mycampus [db-path idx-path]
  IConfig
  (connection
    [this]
    (defdb db-conn (sqlite3 {:db db-path}))
    (Sqlite. db-conn))
  (schema
    [this]
    mycampus-schema)
  (index
    [this]
    idx-path))
