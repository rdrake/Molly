import pickle
import sys

# Hack to let this code run on a headless server
import matplotlib as mpl
mpl.use("Agg")

from collections import defaultdict
from matplotlib.pyplot import *
from numpy import mod

if len(sys.argv) <= 1:
    sys.exit("Usage: %s <results>" % sys.argv[0])

#import mplrc.ieee.transaction_fullpage

#params = {
#	"font.serif": ["Garamond Premier Pro"]
#}

#mpl.pyplot.rcParams.update(params)

dashes = ["--", "-", ":", "-."] # Dashed, solid, dotted, dashed and dotted
hatches = ["\\\\\\", "---", "///", "x"]
results = pickle.load(open(sys.argv[1]))
methods = set([method for (hops, method) in results])
hops = set([hops for (hops, method) in results])

for (hops, method) in results:
    values = []

    for (duration, execution_count, total_duration) in results[(hops, method)]:
        values.append(duration)

    results[(hops, method)] = values
