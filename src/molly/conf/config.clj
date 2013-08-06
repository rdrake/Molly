(ns molly.conf.config
  (:require clojure.java.io))

(defn load-props
  [file-name]
  (let [res (clojure.java.io/resource file-name)]
    (if (nil? res)
      (throw
        (IllegalArgumentException. "Unable to load properties."))
      (with-open [^java.io.Reader reader
                  (clojure.java.io/reader res)]
        (let [props (java.util.Properties.)]
          (.load props reader)
          (into {}
                (for [[k v] props] [(keyword k)
                                    (read-string v)])))))))

(defprotocol IConfig
  (connection [this])
  (schema [this])
  (index [this]))
