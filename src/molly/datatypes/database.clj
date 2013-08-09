(ns molly.datatypes.database
  (:use korma.core
        korma.db))

(defprotocol Database
  (execute-query [this query f]))

(deftype Sqlite [conn]
  Database
  (execute-query
    [this query f]
    (with-db conn
             (doseq [result (-> query (select))]
               (f result)))))
