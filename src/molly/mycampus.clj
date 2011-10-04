(ns molly.mycampus
	(:require [clojureql.core :as cql]))

(def entities {
	:course {
		:sql (-> (cql/table :course)
				(cql/project [[:code :as :id] :title :description]))
		:values [:code :title :desc]}
	:schedule {
		:sql (-> (cql/join
				(-> (cql/table :schedules)
					(cql/project [:id :date_start :date_end :hour_start
									:min_start :hour_end :min_end :location]))
				(-> (cql/table :sections)
					(cql/project [:id :campus]))
				(cql/where (= :schedules.id :sections.id))))
		:values [:location :campus]}
	:person {
		:sql (-> (cql/table :instructors)
				(cql/project [:id :name]))
		:values [:name]}})