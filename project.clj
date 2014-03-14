(defproject molly "1.0.0"
  :description    "Knowledge discovery engine."
  :url            "https://github.com/rdrake/Molly"
  :license        {:name  "Apache License, Version 2.0"
                   :url   "http://www.apache.org/licenses/LICENSE-2.0"}
  :source-paths   ["src/clj"]
  :test-paths     ["test/clj"]
  :resource-paths ["resources"]
  :dependencies
    [[org.clojure/clojure                       "1.5.1"]
     [org.apache.lucene/lucene-core             "4.7.0"]
     [org.apache.lucene/lucene-analyzers-common "4.7.0"]
     [org.xerial/sqlite-jdbc                    "3.7.2"]
     [org.clojure/java.jdbc                     "0.3.3"]
     [org.clojure/tools.cli                     "0.3.1"]
     [org.clojure/data.json                     "0.2.4"]
     [korma                                     "0.3.0-RC5"]
     [compojure                                 "1.1.6"]
     [lib-noir                                  "0.8.1"]
     [criterium                                 "0.4.3"]
     [org.clojure/clojurescript                 "0.0-2173"]
     [shoreleave/shoreleave-remote              "0.3.0"]
     [shoreleave/shoreleave-remote-ring         "0.3.0"]
     [prismatic/dommy                           "0.1.2"]
     [net.drib/strokes                          "0.5.1"]]
  :main           molly.core
  :aot            [molly.core]
  :jvm-opts       ["-Xss1024m"]
  :plugins        [[lein-ring                   "0.8.7"]
                   [lein-cljsbuild              "1.0.2"]
                   [lein-ancient                "0.5.2"]
                   [lein-kibit                  "0.0.8"]]
  :ring           {:handler molly.server.remotes/app}
  :profiles       {:dev
                   {:dependencies
                    [[slamhound                 "1.5.1"]]
                    :aliases
                    {"slamhound" ["run" "-m" "slam.hound"]}}}
  ;:hooks          [leiningen.cljsbuild]
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
