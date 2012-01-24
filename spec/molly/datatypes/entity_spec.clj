(ns molly.datatypes.entity-spec
  (:use [speclj.core]
        [molly.datatypes.entity]))

(comment(def schema {:T      :entity
             :C      :courses
             :ID     :code
             :attrs  [:code :title :description]})

(let row {:code         "csci 2020u"
          :title        "Software Systems Dev. and Int."
          :description  "I do magic tricks for the entertainment of students."}))


(describe "Is it special?"
          (it "is special"
              (should (special? "__all__")))

          (it "is not completely special"
              (should-not (special? "__all")))

          (it "is also not completely special"
              (should-not (special? "all__")))

          (it "is not special"
              (should-not (special? "all"))))

(comment (describe "UID generation"
          (it "should correctly generate UIDs for a single row"
              (let [C   (schema :C)
                    id  (schema :ID)
                    (should (= (uid row C id) "courses|csci_2020u"))))

          (it "should correctly generate UIDs for a number of rows"
              (let [row {:sch_id 1 :sec_id 1 :ins_id 1}
                    ids [[:schedule :sch_id]
                         [:section :sec_id]
                         [:instructor :ins_id]]]
                (should (= (uid row ids) "schedule|1 section|1 instructor|1"))))))
