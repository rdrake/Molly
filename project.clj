(defproject Molly "0.0.1"
	:description "Intelligent knowledge discovery system."
	:url "http://rdrake.github.com/Molly"
  :tasks []
	:main molly.index.build
	:dependencies [[clojure "1.3.0"]
    [org.apache.lucene/lucene-core "3.4.0"]
    [org.apache.lucene/lucene-spellchecker "3.4.0"]
    [clucy "0.2.2"]
		[sqlitejdbc "0.5.6"]
		[org.clojure/java.jdbc "0.0.6"]
    [org.clojure/tools.cli "0.1.0"]
    [org.clojure/data.json "0.1.1"]
		[org.clojars.mccraigmccraig/clojureql "1.1.0-SNAPSHOT"]
    [ring "1.0.0-RC1"]
    [compojure "0.6.5"]
    [noir "1.2.1"]
    [pinot "0.1.1-SNAPSHOT"]])
