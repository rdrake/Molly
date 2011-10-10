(ns molly.core
  (:use [clojure.tools.cli :as cli]))

(defn main
  [args]
  (let [opts (cli/cli args
                      (cli/required ["--dir" "index location"]))]
    ))

(defn -main
  [& args]
  (main (flatten args)))
