(def field {:code "csci 4100u"})

(def field-with-meta
  (with-meta field
    { :store false :index true :tokenize false}))

(prn (meta field-with-meta))
