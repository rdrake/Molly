(ns molly.util.nlp-test
  (:require [molly.util.nlp])
  (:use [clojure.test]))

(deftest q-gram
         (is (= (molly.util.nlp/q-gram "ken pu")
                "$$k $ke ken en$ n$$ $$p $pu pu$ u$$"))
         (is (= (molly.util.nlp/q-gram "ken pu" 2)
                "$k ke en n$ $p pu u$"))
         (is (= (molly.util.nlp/q-gram "ken pu" 3 "%")
                "%%k %ke ken en% n%% %%p %pu pu% u%%")))
