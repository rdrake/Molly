(ns molly.algo.common
  (:use clojure.pprint)
  (:require [molly.datatypes.entity :refer [doc->data]]
            [molly.search.lucene :refer [idx-search]]
            [molly.search.query-builder :refer [boolean-query query]]))

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
  [G u]
  (remove #{u} (find-group-for-id G u)))

(defn initial-state
  [s t]
  {:Q       (conj (clojure.lang.PersistentQueue/EMPTY) s)
   :marked  #{s}
   :dist    {s 0}
   :prev    {s nil}
   :done    false
   :target  t})

(defn update-state
  [state u v max-hops]
  (let [Q       (state :Q)
        marked  (state :marked)
        dist    (state :dist)
        prev    (state :prev)
        target  (state :target)
        done    (or (>= (dist u) max-hops)
                    (= v target))]
    (if done
      (assoc state
             :marked  (conj marked v)
             :dist    (assoc dist v (inc (dist u)))
             :prev    (assoc prev v u)
             :done    done)
      (assoc state
             :Q       (conj Q v)
             :marked  (conj marked v)
             :dist    (assoc dist v (inc (dist u)))
             :prev    (assoc prev v u)))))

(defn deref-future
  [dfd]
  (if (future? dfd)
    (deref dfd)
    dfd))
