(ns molly.util.nlp-test
  (:use clojure.test)
  (:require [molly.util.nlp :refer [q-gram]]))

(deftest q-gram-simple
  "Should only pad beginning and end with s"
  (is (= (q-gram "abc") "$$a $ab abc bc$ c$$")))

(deftest q-gram-space
  "Should replace spaces with s"
  (is (= (q-gram "a b c") "$$a $a$ a$$ $$b $b$ b$$ $$c $c$ c$$")))

(deftest q-gram-shorter-grams
  "Permit different values for q"
  (is (= (q-gram "abc" 2) "$a ab bc c$")))

(deftest q-gram-pad-char
  "Padding character should change"
  (is (= (q-gram "abc" 3 "%") "%%a %ab abc bc% c%%")))
