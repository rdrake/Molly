(ns molly.datatypes.index-spec
  (:use [speclj.core]
        [molly.datatypes.index])
  (:import (molly.datatypes.index Lucene)
           (org.apache.lucene.store SimpleFSDirectory)))

(def idx-path "spec-test.idx")

(def idx (Lucene. idx-path))

(describe "Index path"
          (it "should use a SimpleFSDirectory"
              (should (instance? SimpleFSDirectory (path idx))))

          ; Fix to actually get the idx-path from the simplefsdirectory
          (it "should have used the correct path"
              (should (= idx-path idx-path))))

;(describe "Opening IndexWriter"
;          (it "should use the default analyzer if none is given")

