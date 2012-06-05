(ns molly.server.serve
  (:use noir.core
        molly.algo.ford-fulkerson
        molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder
        molly.util.nlp)
  (:require [noir.server :as server]
            [noir.response :as response]))

(defn start!
  []
  (let [searcher (idx-searcher (idx-path "mycampus.idx"))]
    (defn dox
      [q1 field S op]
      (let [bq (boolean-query
                 (concat [[q1 :and]]
                         (for [s S]
                           [(query field s) op])))]
        (map doc->data (idx-search searcher bq))))

    (defpage "/" []
             (response/redirect "/index.html"))

    (defpage "/suggest/:q" {:keys [q]}
             (response/json
               (dox (query :type :value)
                    :text
                    (clojure.string/split (q-gram q) #"\s{1}") :or)))

    (defpage "/entity/:q" {:keys [q]}
             (response/json
               (dox (query :type :entity)
                    :id
                    (clojure.string/split q #"\s{1}") :and)))

    (defpage "/group/:q" {:keys [q]}
             (println q)
             (response/json
               (dox (query :type :group) :entities [q] :and)))
    
    (defpage "/span" {:keys [e0 eL]}
             (let [[dist prev seen-all] (ford-fulkerson searcher e0)
                   new-eL               (apply disj
                                               (set eL)
                                               (set seen-all))]
               (response/json
                 {:prev     prev
                  :reached  new-eL})))

  (server/start 8080)))