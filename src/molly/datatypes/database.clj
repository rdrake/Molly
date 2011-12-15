(ns molly.datatypes.database
  (:require
    [clojure.java.jdbc :as sql]
    [clojureql.core :as cql]))

(defprotocol Database
  (execute-query [this query f]))

(deftype Sqlite [conn]
  Database
  (execute-query
    [this query f]
    (sql/with-connection conn (cql/with-results [rs query]
                                                (doseq [res rs]
                                                  (f res))))))
