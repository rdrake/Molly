(ns molly.search.test
  (:use molly.datatypes.index)
  (:import (molly.datatypes.index Lucene)))

(let [idx       (Lucene. "mycampus.idx")
      searcher  (open-searcher idx)]
  (search idx searcher "csci"))
