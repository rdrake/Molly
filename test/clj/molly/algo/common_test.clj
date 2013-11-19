(ns molly.algo.common-test
  (:use clojure.test
        molly.algo.common))

(deftest deref-future-test
  (let [value :foo
        a     value
        b     (future value)]
    (is (= (deref-future a) a))
    (is (= (deref-future b) value))))

(deftest initial-state-test
  (let [value :foo
        state (initial-state value)]
    (is (= (:Q state) [value]))
    (is (= (:marked state) #{value}))
    (is (= (value (:dist state)) 0))
    (is (empty? (:prev state)))
    (is (false? (:done state)))))

(deftest update-state-test
  (let [u             :foo
        v             :bar
        state         (initial-state u)
        updated-state (update-state state u v 2)]
    (is (= (:Q updated-state) [u v]))
    (is (= (:marked updated-state) #{u v}))
    (is (= (u (:dist updated-state)) 0))
    (is (= (v (:dist updated-state)) 1))
    (is (seq (:prev updated-state)))
    (is (false? (:done updated-state)))))

(deftest update-state-test-done
  (let [u             :foo
        v             :bar
        state         (initial-state u)
        updated-state (update-state state u v 1)
        done-state    (update-state updated-state u v 1)]
    (println done-state)
    ;(is (= (:Q done-state) [u v]))
    (is (= (:marked done-state) #{u v}))
    (is (= (u (:dist done-state)) 0))
    (is (= (v (:dist done-state)) 1))
    (is (seq (:prev done-state)))
    (is (false? (:done done-state)))))
