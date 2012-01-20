(ns molly.util.nlp)

(defn q-gram
  ([S]
   (q-gram S 3 "$"))
  ([S n]
   (q-gram S n "$"))
  ([S n s]
   (let [padding (clojure.string/join "" (repeat (dec n) "$"))
         padded-S (str padding (clojure.string/replace S " " padding) padding)]
     (clojure.string/join " "
                          (for [i (range (+ 1 (- (count padded-S) n)))]
                            (. padded-S substring i (+ i n)))))))
