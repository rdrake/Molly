(ns molly.search.lucene
  "A simple and thin wrapper around Lucene's native Java API."
  (:use molly.conf.config)
  (:import
    (java.io File StringReader)
    (org.apache.lucene.analysis KeywordAnalyzer PerFieldAnalyzerWrapper WhitespaceAnalyzer)
    (org.apache.lucene.document Document Field Field$Index Field$Store)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength Term)
    (org.apache.lucene.queryParser QueryParser)
    (org.apache.lucene.search IndexSearcher)
    (org.apache.lucene.search.spell SpellChecker LuceneDictionary)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.util Version)))

(def lucene-version
  Version/LUCENE_34)

(def default-analyzer
  (WhitespaceAnalyzer. lucene-version))

(def unlimited-fields
  IndexWriter$MaxFieldLength/UNLIMITED)

(defn mk-directory
  [path]
  (-> path File. SimpleFSDirectory.))

(defn mk-index-writer
  ([path]
   (mk-index-writer path default-analyzer))
  ([path analyzer]
   (let [analyzer (PerFieldAnalyzerWrapper. default-analyzer)]
     (doseq [field (all-value-fields)]
       (. analyzer addAnalyzer field (KeywordAnalyzer.)))
     (IndexWriter. (mk-directory path) analyzer unlimited-fields))))

(defn close-index-writer
  [idx-writer]
  (doto idx-writer
    (.commit)
    (.optimize)
    (.close)))

(defn mk-index-reader
  [path]
  (IndexReader/open (mk-directory path)))

(defn mk-index-searcher
  [path]
  (IndexSearcher. (mk-index-reader path)))

(defn mk-simple-query
  ([q-str field]
   (let [qp (QueryParser. lucene-version field default-analyzer)]
     (. qp parse q-str)))
  ([q-str]
   (mk-simple-query q-str "__all__")))

(defn index-search [idx-searcher query topk]
  (let [topdocs (. idx-searcher search query topk)]
    (for [scoredoc (. topdocs scoreDocs)]
      (. idx-searcher doc (. scoredoc doc)))))

(defn- mk-field
  "Creates a field given a key, value pair."
  [field]
  (Field.
    (str (field :name))
    (str (field :value))
    Field$Store/YES
    Field$Index/ANALYZED))

(defn mk-doc
  [fields]
  (let [doc (Document.)]
    (do
      (doseq [field fields]
        (.add doc (mk-field field)))
      doc)))

(defn mk-spell-checker
  [path]
  (SpellChecker. (mk-directory path)))

(defn add-doc
  [index doc]
  (.addDocument index doc))

(defn add-spelling-correction
  [path]
  (let [spl (mk-spell-checker path)
        rdr (mk-index-reader path)]
    (doseq [field (all-value-fields)]
      (. spl indexDictionary (LuceneDictionary. rdr field)))))
