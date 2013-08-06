import csv
import pickle
import sys

from collections import defaultdict

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
	for method in methods:
		ofile = open("%s_%d_hops.csv" % (method, hops), "wb")
		writer = csv.writer(ofile, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)

		for value in [float(x) for x in results[(target, method)]]:
			writer.writerow([value])

		ofile.close()
