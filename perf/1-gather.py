import pickle
import re

# Hack to let this code run on a headless server
import matplotlib as mpl
mpl.use("Agg")

from collections import defaultdict
from datetime import datetime
from matplotlib.pyplot import *
from pbs import java

# Some constants/settings
RUNS = 100

# Ken Pu
FROM = "instructors|74"

# Database Systems, Jeremy Bradbury, Outdoor Education
to = [
	"schedules|schedules|1731sections|610teaches|338",
	"courses|engr_3960u",
	"schedules|schedules|19657sections|10081teaches|9551",
	"instructors|375",
	"schedules|schedules|11068sections|4263teaches|3619",
	"courses|csci_4100u",
	"schedules|schedules|4125sections|1636teaches|1139",
	"instructors|75"
]

methods = ["bfs", "bfs-atom", "bfs-ref"]

results = defaultdict(list)
x = range(RUNS)

# Should match the nn.nnn msec output of each command
patt = re.compile("(\d+\.\d+)")

# "Bake" some fixed parameters into the Java command
java = java.bake(
	"-server",
	"molly.core",
	"--source", FROM,
	"--benchmark",
	c="mycampus.properties")

count = 0

for target in to:
	for method in methods:
		for i in range(RUNS):
			# Output of the command must be converted to a string
			output = str(java("--target", target, "--algorithm", method))
			# Gra) the time taken
			val = patt.search(output).group(1)

			results[(target, method)].append(val)

			count += 1

			if count % 100 == 0:
				print "%d out of %d" % (count, RUNS)

out = file("%s-result" % datetime.now(), "wb")

pickle.dump(results, out)
