(ns molly.util.nlp
  ; Would use clojure.string/replace too, but it'd replace clojure.core/replace.
  (:use [clojure.string :only (join)]))

(defn ngram
  "Takes in a string, and optionally a value of n (default 3) and a padding character (default $).

  Returns a list of grams of length n."
  ([S n padding-char]
   (if (nil? S)
     '()
     (let [padding  (apply str (repeat (dec n) padding-char))
           s        (str padding (clojure.string/replace S " " padding) padding)
           sub      (fn [t] (subs s t (+ n t)))
           rng      (range (- (count s) (dec n)))]
       (map sub rng))))
  ([string n]
    (ngram string n "$"))
  ([string]
    (ngram string 3 "$")))

(defn ngram-str
  "Simply joins together the results of ngram using whitespace as a separator."
  [S]
  (join " " (ngram S)))
