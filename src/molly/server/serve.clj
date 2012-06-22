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
      [q1 field S op topk]
      (let [bq      (boolean-query
                      (concat [[q1 :and]]
                              (for [s S]
                                [(query field s) op])))
            result  (map doc->data (idx-search searcher bq topk))
            wat     (fn [data] {:meta (meta data) :results data})]
        (map wat result)))
        

    (defpage "/" []
             (response/redirect "/index.html"))

    (defpage "/value" {:keys [q]}
             (response/json
               {:result
                (dox (query :type :value)
                     :text
                     (clojure.string/split (q-gram q) #"\s{1}") :or 3)}))

    (defpage "/entities" {:keys [q]}
             (response/json
               {:result
                (dox (query :type :entity)
                     :text
                     (clojure.string/split (q-gram q) #"\s{1}") :or 3)}))

    (defpage "/entity" {:keys [q]}
             (response/json
               {:result
                (dox (query :type :entity)
                     :id
                     (clojure.string/split q #"\s{1}") :and 3)}))

    (defpage "/group" {:keys [q]}
             (response/json
               {:result
                (dox (query :type :group) :entities [q] :and 10)}))
    
    (defpage "/span" {:keys [e0 eL]}
             (let [start (System/currentTimeMillis)
                   [dist prev seen-all]
                   (ford-fulkerson searcher e0 (set eL) 5)
                   new-eL               (apply disj
                                               (set eL)
                                               (set seen-all))
                   t (- (System/currentTimeMillis) start)]
               (response/json
                 {:prev     prev
                  :reached  new-eL
                  :time t})))

  (server/start 8080)))
