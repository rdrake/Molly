(ns molly.util.lucene
  "A simple and thin wrapper around Lucene's native Java API."
  (:import
    (java.io File StringReader)
    (org.apache.lucene.analysis WhitespaceAnalyzer)
    (org.apache.lucene.document Document Field Field$Index Field$Store)
    (org.apache.lucene.index IndexReader IndexWriter IndexWriter$MaxFieldLength Term)
    (org.apache.lucene.queryParser QueryParser)
    (org.apache.lucene.search IndexSearcher BooleanQuery TermQuery BooleanClause$Occur)
    (org.apache.lucene.store SimpleFSDirectory)
    (org.apache.lucene.analysis.tokenattributes OffsetAttribute TermAttribute)
    (org.apache.lucene.util Version)))

(def lucene-version
  Version/LUCENE_34)

(def default-analyzer
  (WhitespaceAnalyzer. lucene-version))

(def unlimited-fields
  IndexWriter$MaxFieldLength/UNLIMITED)

(defn mk-index-writer
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

(defn analyze-str
  [analyzer string]
  (let [token-stream (. analyzer tokenStream nil (StringReader. string))
        termAttribute (.getAttribute token-stream TermAttribute)]
    (loop [result []]
      (if (.incrementToken token-stream)
        (recur (conj result (.term termAttribute)))
        result))))

(defn mk-simple-query
  ([q-str field]
   (let [q (BooleanQuery.)
         analyzer (WhitespaceAnalyzer. lucene-version)]
     (do
       (doseq [token (analyze-str analyzer q-str)]
         (. q add (TermQuery. (Term. field token))
            BooleanClause$Occur/SHOULD))
       q)))
  ([q-str]
   (mk-simple-query q-str "__content__")))

(defn index-search [idx-searcher query topk]
  (let [topdocs (. idx-searcher search query topk)]
    (for [scoredoc (. topdocs scoreDocs)]
      (. idx-searcher doc (. scoredoc doc)))))

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