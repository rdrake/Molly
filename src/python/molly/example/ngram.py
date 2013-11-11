#!/usr/bin/env python3
def ngram(S, n=3, s="$"):
    padding = s * (n - 1)
    S = padding + S.replace(" ", padding) + padding

    for i in range(len(S) - n + 1):
        yield S[i:i+n]

# Substitute \char"24 for $ or Texpad gets angry.
dollar_bill_yall = r'\char"24'

def texify(grams, prime=False):
    print("\t\t\t\\[\n\t\t\t\tG{} = \{{".format("'" if prime else ""))

    for gram in grams:
        print("\t\t\t\t\t\\text{{``{}''}},".format(
            gram.replace("$", dollar_bill_yall)
        ))

    print("\t\t\t\t\\}\n\t\t\t\\]")

def compare(G, Gp):
    prefix = "\t\t\t\t"

    G = set(G)
    Gp = set(Gp)

    combined_grams = G | Gp

    print("{}\\[".format(prefix))
    print("{}\t\\bordermatrix{{".format(prefix))
    print("{}\t\t~ & G & G' \\cr".format(prefix))

    for (idx, gram) in enumerate(combined_grams):
        print("{}\t\t\\term_{{{}}} : \\text{{``{}''}} & {} & {} \\cr".format(
            prefix,
            idx + 1,
            gram.replace("$", dollar_bill_yall),
            "1" if gram in G else "0",
            "1" if gram in Gp else "0"
        ))

    print("{}\t}}".format(prefix))
    print("{}\\]".format(prefix))

    print("Similarity of \\frac{{{}}}{{{}}}".format(
        len(G & Gp), len(G | Gp)
    ))

G = list(ngram("human"))
Gp = list(ngram("humans"))

texify(G)
texify(Gp, prime=True)

compare(G, Gp)
