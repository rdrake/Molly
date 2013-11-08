(defproject molly "1.0.0"
  :description    "Knowledge discovery engine."
  :url            "https://github.com/rdrake/Molly"
  :license        {:name  "Apache License, Version 2.0"
                   :url   "http://www.apache.org/licenses/LICENSE-2.0"}
  :source-paths   ["src/clj"]
  :resource-paths ["resources"]
  :dependencies
    [[org.clojure/clojure                       "1.5.1"]
     [org.apache.lucene/lucene-core             "4.5.1"]
     [org.apache.lucene/lucene-analyzers-common "4.5.1"]
     [org.xerial/sqlite-jdbc                    "3.7.2"]
     [org.clojure/java.jdbc                     "0.3.0-alpha4"]
     [org.clojure/tools.cli                     "0.2.4"]
     [org.clojure/data.json                     "0.2.3"]
     [korma                                     "0.3.0-RC5"]
     [mavericklou/propertea                     "1.3.2"]
     [compojure                                 "1.1.6"]
     [lib-noir                                  "0.7.4"]
     [criterium                                 "0.4.2"]
     [org.clojure/clojurescript                 "0.0-1934"]
     [shoreleave/shoreleave-remote              "0.3.0"]
     [shoreleave/shoreleave-remote-ring         "0.3.0"]
     [prismatic/dommy                           "0.1.2"]]
  :main           molly.core
  :aot            [molly.core]
  :jvm-opts       ["-Xss1024m"]
  :plugins        [[lein-ring                   "0.8.7"]
                   [lein-cljsbuild              "0.3.4"]
                   [lein-ancient                "0.5.2"]]
  :ring           {:handler molly.server.remotes/app}
  :hooks          [leiningen.cljsbuild]
  ;:mirrors
  ;  {"central"
  ;   {:name "Ibiblio"
  ;    :url "http://mirrors.ibiblio.org/pub/mirrors/maven2"}}
  :cljsbuild
    {:builds
     {:dev
      {:source-paths  ["src/brepl" "src/cljs"]
       :compiler      {:output-to "resources/public/static/js/app.js"
                       :optimizations :whitespace
                       :pretty-print true}}
      :prod
      {:source-paths  ["src/cljs"]
       :compiler      {:output-to "resources/public/static/js/app.min.js"
                       :optimizations :advanced
                       :pretty-print false}}}})
