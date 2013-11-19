(ns molly.util.nlp)

(defn q-gram
  ^{:doc "Given a string S, an integer n (optional), and a character
          s (optional), returns the n-gram of S using s as the
          padding character."}
  ([S]
   (q-gram S 3 "$"))
  ([S n]
   (q-gram S n "$"))
  ([S n s]
   (let [padding  (clojure.string/join "" (repeat (dec n) s))
         padded-S (str padding
                       (clojure.string/replace S " " padding)
                       padding)]
     (clojure.string/join " "
                          (for [i (range
                                    (inc (- (count padded-S) n)))]
                            (.substring padded-S i (+ i n)))))))

(println "Using nlp incorrectly.")

