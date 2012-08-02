import pickle
import sys

# Hack to let this code run on a headless server
import matplotlib as mpl
from common import *

for (target, hops) in targets:
	clf()
	xlabel("Time (ms)")
	ylabel("\# Runs")

	for (i, method) in enumerate(methods):
		vals = [float(x) for x in results[(target, method)]]
		hist(vals, label=method, histtype="step", color="black", hatch=hatches[mod(i, len(hatches))])
	
	legend(loc="upper right")
	savefig("%d_hops.pdf" % hops)
