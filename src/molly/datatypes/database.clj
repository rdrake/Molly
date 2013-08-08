(ns molly.datatypes.database)

(defprotocol Database
  (execute-query [this query f]))

(deftype Sqlite [conn]
  Database
  (execute-query
    [this query f] nil))
    ;(sql/with-connection conn (cql/with-results [rs query]
    ;                                            (doseq [res rs]
    ;                                              (f res))))))
