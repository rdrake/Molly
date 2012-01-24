(ns molly.datatypes.entity-spec
  (:use [speclj.core]
        [molly.datatypes.entity]))

(def schema {:T      :entity
             :C      :courses
             :ID     :code
             :attrs  [:code :title :description]})

(def row {:code         "csci 2020u"
          :title        "Software Systems Dev. and Int."
          :description  "I do magic tricks for the entertainment of students."})

(def data (row->data row schema))

(def doc (data->doc data))

(def new-data (doc->data doc))

(describe "Is it special?"
          (it "is special"
              (should (special? "__all__")))

          (it "is not completely special"
              (should-not (special? "__all")))

          (it "is also not completely special"
              (should-not (special? "all__")))

          (it "is not special"
              (should-not (special? "all"))))

(describe "UID generation"
          (it "should correctly generate UIDs for a single row"
              (let [C   (schema :C)
                    id  (schema :ID)]
                    (should (= (uid row C id) "courses|csci_2020u"))))

          (it "should correctly generate UIDs for a number of rows"
              (let [row {:sch_id 1 :sec_id 1 :ins_id 1}
                    ids [[:schedule :sch_id]
                         [:section :sec_id]
                         [:instructor :ins_id]]]
                (should (= (uid row ids) "schedule|1 section|1 instructor|1")))))

(describe "Row to internal representation"
          (it "must convert a row to a Clojure object with correct metadata"
              (let [meta-data (meta data)]
                (should (every? #(contains? meta-data %)
                                [:type :class :id]))))
          (it "must convert a row to a Clojure object correctly having correct attributes"
              (should (every? #(contains? data %)
                              (schema :attrs)))))

(describe "Internal representation should be able to be transformed into a doc and back again"
          (it "must transform correctly"
              (should (= data new-data))))
