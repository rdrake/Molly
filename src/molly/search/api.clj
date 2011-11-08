(ns molly.search.api
  (:use molly.search.lucene))

(defn get-suggestions
  ([path q n]
   (let [spl (mk-spell-checker path)]
     (. spl suggestSimilar q n)))
  ([path q]
   (get-suggestions path q 5)))

(defn get-entities
  [idx q topk]
  (index-search idx (mk-simple-query q) topk))

(defn get-entities-by-id
  [idx id topk]
  (index-search idx (mk-simple-query id "__id__") topk))

(defn get-groups
  [idx id topk]
  (index-search idx (mk-simple-query id "__content__") topk))
