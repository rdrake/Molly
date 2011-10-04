(ns molly.database
	(:require [clojure.java.jdbc :as sql]
		[clojureql.core :as cql]))

(defn execute-query
	"Executes the specified query on the given connection and executes a callback on the results."
	[conn query f]
	(sql/with-connection conn
		(cql/with-results [rs query]
			(doseq [res rs]
				(apply f res)))))