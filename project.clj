(defproject molly "1.0.0-SNAPSHOT"
            :description  "Knowledge discovery engine."
            :source-path  "src"
            :dependencies
              [[org.clojure/clojure                   "1.4.0-beta1"]
               [org.apache.lucene/lucene-core         "3.5.0"]
               [org.apache.lucene/lucene-analyzers    "3.5.0"]
               [sqlitejdbc                            "0.5.6"]
               [org.clojure/java.jdbc                 "0.0.6"]
               [org.clojure/tools.cli                 "0.2.1"]
               [clojureql                             "1.0.3"]
               [noir                                  "1.3.0-alpha10"]]
            :dev-dependencies [[speclj "2.1.1"]]
            :test-path    "spec/"
            :main         molly.core
            :jvm-opts     ["-Xss1024m"])
