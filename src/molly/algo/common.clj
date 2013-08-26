(ns molly.algo.common
  (:use molly.datatypes.entity
        molly.search.lucene
        molly.search.query-builder))

(defn find-entity-by-id
  [G id]
  (let [query (boolean-query [[(query :type :entity) :and]
                              [(query :id id) :and]])]
    (map doc->data (idx-search G query 10))))

(defn find-group-for-id
  [G id]
  (let [query   (boolean-query [[(query :type :group) :and]
                                [(query :entities id) :and]])
        results (map doc->data (idx-search G query 10))
        big-str (clojure.string/join " "
                                     (map #(% :entities) results))]
    (distinct (clojure.string/split big-str #"\s{1}"))))

(defn find-adj
  [G v]
  (remove #{v} (find-group-for-id G v)))

(defonce initial-state
  (fn
    [s]
    (atom {:Q       (-> (clojure.lang.PersistentQueue/EMPTY) (conj s))
           :marked  #{s}
           :dist    {s 0}
           :prev    {}
           :done    false})))

(defonce update-state
  (fn
    [state u v]
    (let [Q       (state :Q)
          marked  (state :marked)
          dist    (state :dist)
          prev    (state :prev)]
      (assoc state
             :Q       (conj Q v)
             :marked  (conj marked v)
             :dist    (assoc dist v (inc (dist u)))
             :prev    (assoc prev v u)))))

(defonce deref-future
  (fn
    [dfd]
    (if (future? dfd)
      (deref dfd)
      dfd)))
