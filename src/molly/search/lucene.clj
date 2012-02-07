(ns molly.search.lucene
  (:import
    (java.io File)
    (org.apache.lucene.analysis WhitespaceAnalyzer)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength)
    (org.apache.lucene.queryParser QueryParser)
    (org.apache.lucene.search IndexSearcher)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def version
     Version/LUCENE_35)
(def default-analyzer
  (WhitespaceAnalyzer. version))
(def unlimited-fields IndexWriter$MaxFieldLength/UNLIMITED)

(defn idx-path
  [path]
  (-> path File. SimpleFSDirectory.))

(defn idx-searcher
  [idx-path]
  (-> (IndexReader/open idx-path) IndexSearcher.))

(defn idx-writer
  ([idx-path analyzer]
    (IndexWriter. idx-path analyzer unlimited-fields))
  ([idx-path]
    (idx-writer idx-path default-analyzer)))

(defn close-idx-writer
  [idx-writer]
  (doto idx-writer
    ; Lucene docs say not to use .optimize anymore.
    (.commit)
    (.close)))

(defn idx-search
  [idx-searcher query]
  (let [results (. (. idx-searcher search query 100) scoreDocs)]
    (map (fn [result] (.doc idx-searcher (.doc result))) results)))

(defn add-doc
  [idx doc]
  (. idx addDocument doc))
