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

(for [suggestion (get-suggestions "mycampus-entity.idx" "dtabse")]
  (println suggestion))
