(defproject molly "1.0.0-SNAPSHOT"
            :description  "Knowledge discovery engine."
            :url          "https://github.com/rdrake/Molly"
            :license      {:name  "Apache License, Version 2.0"
                           :url   "http://www.apache.org/licenses/LICENSE-2.0"}
            :source-path  "src"
            :dependencies
              [[org.clojure/clojure                       "1.5.1"]
               [org.apache.lucene/lucene-core             "4.4.0"]
               [org.apache.lucene/lucene-analyzers-common "4.4.0"]
               [org.xerial/sqlite-jdbc                    "3.7.2"]
               ; ClojureQL requires an oudated version of java.JDBC
               ; to run.  It uses an obsolete namespace.
               [org.clojure/java.jdbc                     "0.1.4"]
               [org.clojure/tools.cli                     "0.2.2"]
               [clojureql                                 "1.0.3"]
               [compojure                                 "1.1.5"]
               [lib-noir                                  "0.6.6"]]
            :main         molly.core
            :jvm-opts     ["-Xss1024m"]
            :plugins      [[lein-ring                     "0.8.6"]]
            :ring         {:handler molly.server.serve/app})
