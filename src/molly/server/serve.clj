(ns molly.server.serve
  (:use noir.core
        molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder
        molly.util.nlp)
  (:require [noir.server :as server]
            [noir.response :as response]))

(def searcher (idx-searcher (idx-path "mycampus.idx")))

(defn dox
  [q1 S]
  (let [bq (boolean-query
             (concat [[q1 :and]]
                     (for [s S]
                       [(query :text s) :or])))]
    (map doc->data (idx-search searcher bq))))

(defpage "/" []
         (response/redirect "/index.html"))

(defpage "/suggest/:q" {:keys [q]}
         (response/json
           (dox (query :type :value)
                (clojure.string/split (q-gram q) #"\s{1}"))))

(defpage "/entity/:q" {:keys [q]}
         (response/json
           (dox (query :type :entity)
                (clojure.string/split q #"\s{1}"))))

(defn start!
  []
  (server/start 8080))
