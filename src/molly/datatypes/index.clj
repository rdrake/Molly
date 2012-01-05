(ns molly.datatypes.index
  (:import
    (java.io File)
    (org.apache.lucene.analysis PerFieldAnalyzerWrapper)
    (org.apache.lucene.analysis.standard StandardAnalyzer)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength)
    (org.apache.lucene.search.spell LuceneDictionary NGramDistance SpellChecker)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def default-analyzer
  (-> Version/LUCENE_35 (StandardAnalyzer.) (PerFieldAnalyzerWrapper.)))
(def unlimited-fields IndexWriter$MaxFieldLength/UNLIMITED)

(defprotocol Index
  (path [this])
  (open-writer
    [this]
    [this analyzer])
  (close-writer [this idx])
  (add-doc [this idx doc])
  (spell-check [this fields]))

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
    (.addDocument idx doc))
  (spell-check
    [this fields]
    (let [spell-checker (SpellChecker. (path this) (NGramDistance. 3))
          rdr (IndexReader/open (path this))]
      (doseq [field fields]
        (.indexDictionary (LuceneDictionary. rdr (name field)) spell-checker)))))
