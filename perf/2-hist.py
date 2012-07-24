import pickle
import sys

# Hack to let this code run on a headless server
import matplotlib as mpl
mpl.use("Agg")

from collections import defaultdict
from matplotlib.pyplot import *

if len(sys.argv) <= 1:
	sys.exit("Usage: %s <results>" % sys.argv[0])

results = pickle.load(open(sys.argv[1]))
targets = set([target for (target, method) in results])
methods = set([method for (target, method) in results])

for target in targets:
	clf()
	title(target)
	xlabel("Time (ms)")
	ylabel("# Runs")

	for method in methods:
		vals = [float(x) for x in results[(target, method)]]
		print target
		hist(vals, label=method)
	
	legend(loc="upper right")
	savefig("%s.png" % target)
