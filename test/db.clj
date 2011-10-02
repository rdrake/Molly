(ns test.db
	(:require [clojure.java.jdbc :as sql]
		[clojureql.core :as cql]))

(def db {
	:classname "org.sqlite.JDBC"
	:subprotocol "sqlite"
	:subname "data/mycampus.sq3"
	})

(def sel (-> (cql/table :courses)
	(cql/project [:title])))

(sql/with-connection db
	(cql/with-results [rs sel]
		(println (count rs))))