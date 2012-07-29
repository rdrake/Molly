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

targets.sort(key=lambda (name, hops): (hops, name))

clf()

title("Growth")
xlabel("# Hops")
ylabel("Average Time (ms)")

def average(target, method):
	vals = [float(x) for x in results[(target, method)]]
	return reduce(lambda x, y: x + y, vals) / len(vals)

x = [i + 1 for i in range(len(targets))]

for method in methods:
	y = [average(target, method) for (target, hops) in targets]
	plot(x, y, label=method)

legend(loc="upper right")
savefig("growth.png")
