(ns molly.lucene
  (:import
    (java.io File)
    (org.apache.lucene.analysis WhitespaceAnalyzer)
    (org.apache.lucene.document Document Field Field$Index Field$Store)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength)
    (org.apache.lucene.queryParser QueryParser)
    (org.apache.lucene.search IndexSearcher)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def lucene-version
  Version/LUCENE_34)

(def default-analyzer
  (WhitespaceAnalyzer. lucene-version))

(def unlimited-fields
  IndexWriter$MaxFieldLength/UNLIMITED)

(defn mk-index-writer
;  [path]
;  (let [dir (-> path File. SimpleFSDirectory.)]
;    (IndexWriter. dir default-analyzer unlimited-fields)))
  ([path]
   (mk-index-writer path default-analyzer))
  ([path analyzer]
   (let [dir (-> path File. SimpleFSDirectory.)]
     (IndexWriter. dir analyzer unlimited-fields))))

(defn close-index-writer
  [idx-writer]
  (doto idx-writer
    (.commit)
    (.optimize)
    (.close)))

(defn mk-index-searcher
  [path]
  (IndexSearcher. (IndexReader/open (-> path File. SimpleFSDirectory.))))

(defn close-index-searcher
  [idx-searcher]
  (.close idx-searcher))

(defn- mk-field
  "Creates a field given a key, value pair and (optionally) metadata.

    ^{:store bool :index bool :tokenize bool}"
  [field]
  (let [meta-data (meta field)]
    (Field.
      (str (field :name))
      (str (field :value))
      (if (and meta-data (not (meta-data :store)))
        Field$Store/NO
        Field$Store/YES)
      (if meta-data
        (if (meta-data :index)
          (if (meta-data :tokenize)
            Field$Index/ANALYZED
            Field$Index/NOT_ANALYZED)
          Field$Index/NO)
        Field$Index/ANALYZED))))

(defn mk-doc
  [fields]
  (let [doc (Document.)]
    (do
      (doseq [field fields]
        (.add doc (mk-field field)))
      doc)))

(defn add-doc
  [index doc]
  (.addDocument index doc))
