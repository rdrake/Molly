(ns molly.core
  (:gen-class)
  (:use molly.conf.config
        molly.server.serve
        molly.index.build
        molly.search.lucene
        molly.search.query-builder
        [clojure.tools.cli :only (cli)]))

(defn parse-args
  [args]
  (cli args
       ["-a" "--action" "Action to perform [serve|index]"]
       ["-c" "--config" "Path to configuration (properties) file"]))

(defn -main
  [& args]
  (let [[opts arguments banner] (parse-args (flatten args))
        action                  (opts :action)
        properties              (load-props (opts :config))]
    (condp = action
      "serve" (start! properties)
      "index" (build (properties :database)
                     (properties :index)))))
