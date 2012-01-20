(ns molly.datatypes.index
  (:import
    (java.io File)
    (org.apache.lucene.analysis WhitespaceAnalyzer)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def version
     Version/LUCENE_35)
(def default-analyzer
  (WhitespaceAnalyzer. version))
(def unlimited-fields IndexWriter$MaxFieldLength/UNLIMITED)

(defprotocol Index
  (path [this])
  (open-writer
    [this]
    [this analyzer])
  (close-writer [this idx])
  (add-doc [this idx doc]))

(deftype Lucene [idx-path]
  Index
  (path
    [this]
    (-> idx-path File. SimpleFSDirectory.))
  (open-writer
    [this]
    (open-writer this default-analyzer))
  (open-writer
    [this analyzer]
    (IndexWriter. (path this) analyzer unlimited-fields))
  (close-writer
    [this idx]
    (doto idx
      (.commit)
      (.optimize)
      (.close)))
  (add-doc
    [this idx doc]
    (.addDocument idx doc)))
