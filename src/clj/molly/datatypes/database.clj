(ns molly.datatypes.database
  (:require [korma.core :refer [select]] [korma.db :refer [with-db]]))

(defprotocol Database
  (execute-query [this query f]))

(deftype Sqlite [conn]
  Database
  (execute-query
    [this query f]
    (with-db conn
             (doseq [result (select query)]
               (f result)))))
