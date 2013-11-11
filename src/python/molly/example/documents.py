#!/usr/bin/env python3
from collections import Counter

D = [
    "math 360 is a math class",
    "cdps 101 is a boring lecture",
    "mathematics lecture was great",
    "math lecture is great"
]

for d in D:
    print(d)

# Normalize, tokenize, and count frequencies.
D = [Counter(d.lower().split()) for d in D]

print("\\begin{align}")

for (i, d) in enumerate(D):
    S = ["\\text{{``{}''}}: {}".format(k, v) for (k, v) in d.items()]
    print("\t\\doc_{} &= \\{{{}\\}} \\\\".format(i + 1, ", ".join(S)))

print("\\end{align}")

cf = Counter()
df = Counter()

for d in D:
    cf += d
    df += Counter(d.keys())

cf = dict(cf)
df = dict(df)
    
T = list(cf.keys())
T.sort()

S = ["\\text{{``{}''}}".format(t) for t in T]
print("T = \\left\\{{{}\\right\\}}".format(", ".join(S)))
print("|T| = {}".format(len(T)))

from math import log

def tf(t, d):
    if t in d:
        return d[t] / len(d.keys())
    
    return 0.0

def idf(t):
    return log(len(D) / df[t], 2)

def tfidf(d, t):
    return tf(t, d) * idf(t)

tfidfs = {}

for (idx, t) in enumerate(T):
    for d_num in range(len(D)):
        d = dict(D[d_num])
        tfidfs[(t, d_num)] = tfidf(d, t)

def print_line(L):
    print("{} \\cr".format(" & ".join(L)))

print("\\[\\bordermatrix{")

print_line(["~"] + ["d_{}".format(i + 1) for i in range(len(D))])

for (idx, t) in enumerate(T):
    line_items = [round(tfidfs[(t, d_num)], 4) for d_num in range(len(D))]
    print_line(["\\term_{{{}}} : \\text{{``{}''}}".format(idx + 1, t)] + ["{:.4f}".format(item) for item in line_items])
    
print("}\\]")

import numpy as np

d_vecs = []

for d_num in range(len(D)):
    d_vec = []
    
    print("\\vec{{\\doc_{}}} = ".format(d_num + 1))
    print("\\left[")
    print("\\begin{array}{c}")
    
    for t in T:
        d_vec.append(tfidfs[(t, d_num)])
        print("{:.4f} \\\\".format(round(tfidfs[(t, d_num)], 4)))
    
    d_vecs.append(np.array(d_vec))
    
    print("\\end{array}")
    print("\\right]")

from scipy.spatial.distance import cosine
from math import sqrt

def similarity(d1, d2):
    return np.dot(d1, d2) / (np.linalg.norm(d1) * np.linalg.norm(d2))

q = d_vecs[len(d_vecs) - 1]

for idx in range(len(d_vecs) - 1):
    print("\\similarity(\\vec{{\\doc_{}}}, \\vec{{\\q}}) = {}".format(idx + 1, similarity(d_vecs[idx], q)))
