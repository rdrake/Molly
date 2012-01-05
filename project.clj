(defproject molly "1.0.0-SNAPSHOT"
            :description  "Knowledge discovery engine."
            :source-path  "src"
            :dependencies
              [[org.clojure/clojure                   "1.3.0"]
               [org.apache.lucene/lucene-core         "3.5.0"]
               [org.apache.lucene/lucene-analyzers    "3.5.0"]
               [org.apache.lucene/lucene-spellchecker "3.5.0"]
               [sqlitejdbc                            "0.5.6"]
               [org.clojure/java.jdbc                 "0.0.6"]
               [org.clojure/tools.cli                 "0.2.1"]
               [org.clojars.mccraigmccraig/clojureql  "1.1.0-SNAPSHOT"]]
            :dev-dependencies [[org.clojars.ibdknox/lein-nailgun "1.1.1"]]
            :main         molly.core)
