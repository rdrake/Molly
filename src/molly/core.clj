(ns molly.core
	(:use molly.mycampus)
	(:use molly.database))

(defn -main [& args]
	(println "lolwut"))

(-main)

(println ((entities :course) :sql))