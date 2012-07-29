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
#targets = set([target for (target, method) in results])
methods = set([method for (target, method) in results])

targets = [
	["instructors|75", 8],
	["schedules|schedules|4125sections|1636teaches|1139", 7],
	["courses|csci_4100u", 6],
	["schedules|schedules|11068sections|4263teaches|3619", 5],
	["instructors|375", 4],
	["schedules|schedules|19657sections|10081teaches|9551", 3],
	["courses|engr_3960u", 2],
	["schedules|schedules|1731sections|610teaches|338", 1]
]

for (target, hops) in targets:
	clf()
	title("%d Hop(s) [%s]" % (hops, target))
	xlabel("Time (ms)")
	ylabel("# Runs")

	for method in methods:
		vals = [float(x) for x in results[(target, method)]]
		hist(vals, label=method)
	
	legend(loc="upper right")
	savefig("%d_hops.png" % hops)
