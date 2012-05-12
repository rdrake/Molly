(ns molly.algo.common
  (:use molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder))

(defn find-entity-by-id
  [G id]
  (let [query (boolean-query [[(query :type :entity) :and]
                              [(query :id id) :and]])]
    (map doc->data (idx-search G query))))

(defn find-group-for-id
  [G id]
  (let [query   (boolean-query [[(query :type :group) :and]
                                [(query :entities id) :and]])
        results (map doc->data (idx-search G query))
        big-str (clojure.string/join " " (map #(% :entities) results))]
    (distinct (clojure.string/split big-str #"\s{1}"))))

(defn neighbours
  [G v]
  (find-group-for-id G v))
