(use '[clojure.string :only (join)])

(def entity
  {:__type__ "Course"
   :__id__ "csci 4100u"
   :__attrib__
    {:code "csci 4100u"
     :title "Mobile Devices"
     :description "This course is an introduction to..."}})

(def new-ent
  (into entity (join " " (vals (entity :__attrib__)))))
