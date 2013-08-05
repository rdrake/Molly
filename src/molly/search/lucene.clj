(ns molly.search.lucene
  (:import
    (java.io File)
    (org.apache.lucene.analysis.core WhitespaceAnalyzer)
    (org.apache.lucene.index IndexReader IndexWriter
                             IndexWriterConfig)
    (org.apache.lucene.search IndexSearcher)
    (org.apache.lucene.store Directory SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def version
     Version/LUCENE_44)
(def default-analyzer
  (WhitespaceAnalyzer. version))

(defn ^Directory idx-path
  [path]
  (-> path File. SimpleFSDirectory.))

(defn idx-searcher
  [^IndexSearcher idx-path]
  (-> (IndexReader/open idx-path) IndexSearcher.))

(defn ^IndexWriter idx-writer
  ([^Directory idx-path analyzer]
    (IndexWriter. idx-path (IndexWriterConfig. version analyzer)))
  ([^Directory idx-path]
    (idx-writer idx-path default-analyzer)))

(defn close-idx-writer
  [^IndexWriter idx-writer]
  (doto idx-writer
    ; Lucene docs say not to use .optimize anymore.
    (.commit)
    (.close)))

(defn idx-search
  [idx-searcher query topk]
  (let [results (. (. idx-searcher search query topk) scoreDocs)]
    (map (fn [result] (.doc idx-searcher (.doc result))) results)))

(defn add-doc
  [idx doc]
  (. idx addDocument doc))
