(ns molly.util.converter
  "Utility functions which convert to and from entities."
  (:use molly.util.lucene
        molly.util.nlp
        [clojure.string :only (join)]))

(defn any->entity
  "Converts either a value or entity row into an entity.
   
   * T - type (usually the table name)
   * id - a unique ID (usually the :id column of the row)
   * attrs - attributes to add to the entity
  
  In the case of (= T :value), there is only one attribute."
  [T id attrs]
  {:__type__  T
   :__id__    id
   :__attr__  attrs})

(defn entity->doc
  "Converts an entity into a document.  It essentially flattens it and creates a special sequence of maps (k, v) that mk-doc can interpret."
  [entity]
  (let [all         (join " " (vals (entity :__attr__)))
        flat-entity (into (dissoc entity :__attr__)
                          [(entity :__attr__) {:__all__ all}])
        field-map   (for [[k v] flat-entity] {:name (name k) :value (str v)})]
    (mk-doc field-map)))

;(defn doc->entity
;  [doc]
;  (for [field (.getFields doc)]
;    
