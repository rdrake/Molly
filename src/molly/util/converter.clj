(ns molly.util.converter
  "Utility functions which convert to and from entities."
  (:use molly.search.lucene
        molly.util.nlp
        [clojure.string :only (join)]))

(defn a->entity
  "Converts a row into an entity.
   
   * T - type (usually the table name)
   * id - a unique ID (usually the :id column of the row)
   * attrs - attributes to add to the entity"
  [T id attrs]
  (with-meta attrs
             {:__type__ T :__id__ id}))

(defn entity->doc
  "Converts an entity into a document.  It essentially flattens it and creates a special sequence of maps (k, v) that mk-doc can interpret."
  [entity]
  (let [all (join " " (vals entity))
        M   (into entity (into (meta entity) {:__all__ all}))]
    (mk-doc M)))

(defn group-row->doc
  "Converts a row representing a group into a document."
  [entry]
  (let [contents (join " " entry)]
    (mk-doc [{:name "__content__" :value contents}])))

(defn doc->entity
  [doc]
  (let [T     (. doc get "__type__")
        id    (. doc get "__id__")
        m     (into {} (for [field (.getFields doc)]
                             [(keyword (.name field)) (.stringValue field)]))
        attrs (dissoc m :__type__ :__id__ :__all__)]
    (a->entity T id attrs)))

(defn grp->lst
  [grp]
  (clojure.string/split
    (. (. grp getFieldable "__content__") stringValue) #"\s+"))

(defn entry->uid
  [entity id]
  (if (nil? id)
    nil
    (str (name entity) "|" (clojure.string/replace id " " "_"))))
