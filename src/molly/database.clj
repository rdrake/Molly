(ns molly.database
	(:require
    [clojure.java.jdbc :as sql]
		[clojureql.core :as cql]
    [clucy.core :as clucy]))

(defn execute-query
	"Executes the specified query on the given connection and executes a callback on the results."
	[conn query f]
	(sql/with-connection conn
		(cql/with-results [rs query]
      (clucy/add f rs))))
			;(doseq [res rs]
				;(f res)))))
