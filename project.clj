(defproject Molly "0.0.1"
	:description "Intelligent knowledge discovery system."
	:url "http://rdrake.github.com/Molly"
	:tasks []
	:main [ca.uoit.molly.main]
	:dependencies [[clojure "1.3.0"]
    [org.apache.lucene/lucene-core "3.4.0"]
		[sqlitejdbc "0.5.6"]
		[org.clojure/java.jdbc "0.0.6"]
		[org.clojars.mccraigmccraig/clojureql "1.1.0-SNAPSHOT"]])
