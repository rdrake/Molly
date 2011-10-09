;(def x (atom clojure.lang.PersistentQueue/EMPTY))
(ns molly.index-writer-queue
  (:import
    (java.io File)
    (org.apache.lucene.analysis WhitespaceAnalyzer)
    (org.apache.lucene.index IndexWriter IndexWriter$MaxFieldLength)
    (org.apache.lucene.store NIOFSDirectory)
    (org.apache.lucene.util Version)))

(let [path "entity.idx"
      dir (-. path File. NIOFSDirectory.)
      analyzer (WhitespaceAnalyzer. Version/LUCENE_34)
      field-length IndexWriter$MaxFieldLength/UNLIMITED]
  (with-open [index-writer (IndexWriter. dir analyzer field-length)]
    ))

;(let [path "entity.idx"
;      dir (-> path File. NIOFSDirectory.)
;      analyzer (WhitespaceAnalyzer.); Version/LUCENE_32) - Lucene too old.
;      field-length IndexWriter$MaxFieldLength/UNLIMITED
;      index-writer (agent (IndexWriter. dir analyzer field-length))]
;  (defn add-doc
;    [doc]
;    (send index-writer #(.addDocument %) doc)))
