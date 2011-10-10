(ns molly.database
	(:require
    [clojure.java.jdbc :as sql]
		[clojureql.core :as cql]
    [clucy.core :as clucy]))

(defn distinct-value
  [query col]
  (-> query (cql/project [col]) cql/distinct))

(defn execute-query
	"Executes the specified query on the given connection and executes a callback on the results."
	[conn query f]
	(sql/with-connection conn
		(cql/with-results [rs query]
			(doseq [res rs]
				(f res)))))
