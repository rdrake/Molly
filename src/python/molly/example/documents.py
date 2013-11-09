# -*- coding: utf-8 -*-
# <nbformat>3.0</nbformat>

# <codecell>

from collections import Counter

D = ["Superman is strong on Earth and lives on Earth",
     "Batman was born on Earth",
     "Superwoman is fast on Earth",
     "Superman was born on Krypton",
     "Superwoman was born on Krypton"]

for d in D:
    print(d)

# Normalize, tokenize, and count frequencies.
D = [Counter(d.lower().split()) for d in D]

# <markdowncell>

# Let each sentence be a document.  We would have the following documents.

# <codecell>

print "$$\\begin{eqnarray*}"

for (i, d) in enumerate(D):
    S = ["\\textrm{``%s''}: %i" % (k, v) for (k, v) in d.items()]
    print("d_%i &=& \\left\\{%s\\right\\} \\\\" % (i + 1, ", ".join(S)))

print "\\end{eqnarray*}$$"

# <markdowncell>

# Let $D$ be the collection of documents $\left\{d_1, d_2, d_3, d_4\right\}$.  Thus, for $D$, $N = 4$.

# <codecell>

cf = Counter()
df = Counter()

for d in D:
    cf += d
    #print set(d.keys())
    # Take the keys which have duplicates already removed and add it to the
    # document frequency, which gives us the number of documents with each term.
    df += Counter(d.keys())

cf = dict(cf)
df = dict(df)
    
T = cf.keys()

S = ["\\textrm{``%s''}" % t for t in T]
print("T = \\left\\{%s\\right\\}" % ", ".join(S))
print("|T| = %i" % len(T))

# <markdowncell>

# $T = \{$'and', 'on', 'superwoman', 'batman', 'is', 'krypton', 'fast', 'born', 'lives', 'earth', 'strong', 'was', 'superman'$\}$ and $\mid T \mid = 13$.

# <headingcell level=2>

# Document Vectorization

# <markdowncell>

# One of the most fundamental approach for search documents is to treat documents as high dimensional vectors, and the document collection as a subset in a vector space.  The search query becomes a nearest neighbour query in a vector space equipped with a distance measure.
# 
# The first step is to convert bag of terms into vectors.  The standard technique (cite Intro to IR book) uses a scoring function that measures the relative importance terms in documents.

# <headingcell level=3>

# Definition (TF-IDF)

# <markdowncell>

# The term frequency is the number of times a term t appears in a document $d$, as given by $\freq(t,d)$.  The document frequency (df) of a term $t$ is the number of documents in $D$ that contains $t$.  It is defined as:
# $\df(t) = | \{d\in D: t\in d\} |$ 
# 
# The combined tf-idf score of $t$ in a document $d$ is given by:
# 
# $$ \frac{\freq(t,d)}{|d|} \cdot \log(\frac{|D|}{\df(t)}) $$

# <markdowncell>

# The first component: $\frac{\freq(t,d)}{|d|}$ favours terms which have high frequency in a document.  However the second component, $\log(\frac{|D|}{\df(t)})$, suppresses terms which are frequently found throughout the whole collection.

# <codecell>

from math import log

def tf(t, d):
    if t in d:
        return float(d[t]) / len(d.keys())
    
    return 0.0

def idf(t):
    return log(float(len(D)) / df[t], 2)

def tfidf(d, t):
    return tf(t, d) * idf(t)

tfidfs = {}

for (idx, t) in enumerate(T):
    for d_num in range(len(D)):
        d = dict(D[d_num])
        tfidfs[(t, d_num)] = tfidf(d, t)

def print_line(L):
    print("%s \\cr" % " & ".join(L))

print "$$\\bordermatrix{"

print_line(["~"] + ["d_%i" % (i + 1) for i in range(len(D))])

for t in T:
    line_items = [round(tfidfs[(t, d_num)], 4) for d_num in range(len(D))]
    print_line(["\\textrm{``%s''}" % t] + ["{:.4f}".format(item) for item in line_items])
    
print "}$$"

# <codecell>

import numpy as np

d_vecs = []

for d_num in range(len(D)):
    d_vec = []
    
    print "\\vec{d_%i} = " % (d_num + 1)
    print "\\left["
    print "\\begin{array}{c}"
    
    for t in T:
        d_vec.append(tfidfs[(t, d_num)])
        print "%.4f \\\\" % round(tfidfs[(t, d_num)], 4)
    
    d_vecs.append(np.array(d_vec))
    
    print "\\end{array}"
    print "\\right]"

# <codecell>

from scipy.spatial.distance import cosine
from math import sqrt

def similarity(d1, d2):
    return np.dot(d1, d2) / (np.linalg.norm(d1) * np.linalg.norm(d2))

q = d_vecs[len(d_vecs) - 1]

for idx in range(len(d_vecs) - 1):
    print "similarity(d_%d, q) = %f" % (idx + 1, similarity(d_vecs[idx], q))

# <headingcell level=3>

# Example

