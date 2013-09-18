import pickle
import sys

# Hack to let this code run on a headless server
import matplotlib as mpl
from common import *

if len(sys.argv) <= 1:
    sys.exit("Usage: %s <results>" % sys.argv[0])

for (hops_, target) in results:
    values = results[(hops_, target)]

    for value in values:
        print hops_, target, value

#for (target, hops) in targets:
#	clf()
#	xlabel("Time (ms)")
#	ylabel("\# Runs")
#
#	for (i, method) in enumerate(methods):
#		vals = [float(x) for x in results[(target, method)]]
#		hist(vals, label=method, linewidth=0.0, bins=100)
#	
#	legend(loc="upper right")
#	savefig("%d_hops.pdf" % hops)
