(ns molly.converter
  (:use molly.lucene
        [clojure.string :only (join)]))

(defn row-to-entity
  "Converts a row into an entity.  An entity has the following properties:
   * Type
   * ID
   * Attributes (except the ID field)"
  [ent-def row]
  (array-map :__type__ (ent-def :name)
             :__id__ (row (keyword (ent-def :id)))
             :__attrib__
                (select-keys row (for [[k v] row :when (not= k :id)] k))))

(defn row-to-value
  [ent-def col value]
  [{:name "__type__" :value (ent-def :name)}
   {:mame "__attr__" :value (name col)}
   {:name "__val__" :value (value col)}])

(defn entity-to-doc
  "Flattens an entity, converts the entity entries into fields, then returns a document."
  [entity]
  (let [content (join " " (vals (entity :__attrib__)))
        flat-entity (into {:__type__ (entity :__type__)
                           :__id__ (entity :__id__)
                           :__content__ content}
                          (entity :__attrib__))
        field-map (for [[k v] flat-entity]
                    {:name (name k) :value (str v)})]
    (mk-doc field-map)))

(defn value-to-doc
  [value]
  (mk-doc value))
