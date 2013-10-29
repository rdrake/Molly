(ns molly.server.search
  (:use molly.search.lucene
        molly.search.query-builder
        molly.util.nlp
        molly.conf.config
        molly.datatypes.entity
        [molly.algo.bfs :only (bfs)]
        [molly.algo.bfs-atom :only (bfs-atom)]
        [molly.algo.bfs-ref :only (bfs-ref)]))

(def props (load-props ".properties"))
(def searcher (idx-searcher (idx-path (props :index))))

(defn dox
  [q field S op topk]
  (let [bq      (boolean-query
                  (concat [[q :and]]
                          (for [s S]
                            [(query field s) op])))
        result  (map doc->data (idx-search searcher bq topk))
        fmt     (fn [data] {:meta (meta data) :results data})]
    (map fmt result)))

(defn entities
  [field q topk]
  (dox (query :type :entity)
       field
       (clojure.string/split q #"\s{1}")
       :and
       topk))

(defn find-value [q]
  (dox (query :type :value)
       :text
       (clojure.string/split (q-gram q) #"\s{1}")
       :or
       (props :topk_value)))

(defn find-entities [q]
  (entities
    :text (clojure.string/lower-case q)
    (props :topk_entities)))

(defn find-entity [id]
  (entities :id id (props :topk_entity)))

(defn compute-span [s t method]
  (let [[visited dist prev]
        (condp = method
          "bfs"  (bfs searcher s t (props :max-hops))
          "atom" (bfs-atom searcher s t (props :max-hops))
          "ref"  (bfs-ref searcher s t (props :max-hops)))]
    {:from s
     :to   t
     :prev prev}))
