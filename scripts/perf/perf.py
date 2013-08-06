import re

# Hack to let this code run on a headless server
import matplotlib as mpl
mpl.use("Agg")

from collections import defaultdict
from matplotlib.pyplot import *
from pbs import java

# Some constants/settings
RUNS = 2

# Ken Pu
FROM = "instructors|74"

# Database Systems, Jeremy Bradbury, Outdoor Education
to = ["courses|csci_3030u", "instructors|75", "courses|educ_3482u"]

# Plain, Atom, STM
#methods = ["plain", "atom", "stm"]
methods = ["bfs-bench", "bfs-ref-bench", "bfs-atom-bench"]

results = defaultdict(list)
x = [i + 1 for i in range(RUNS)]

# Should match the nn.nnn msec output of each command
patt = re.compile("(\d+\.\d+)")

# "Bake" some fixed parameters into the Java command
java = java.bake("-server", "molly.core", c="mycampus.properties")

for target in to:
	clf()
	title("%s to %s" % (FROM, target))
	xlabel("Run")
	ylabel("Time (ms)")

	for method in methods:
		for i in range(RUNS):
			# Output of the command must be converted to a string
			output = str(java("--source", FROM, "--target", target, a=method))
			# Grab the time taken
			val = patt.search(output).group(1)

			results[(target, method)].append(val)

		plot(x, results[(target, method)], label=method)
	
	legend(loc="upper right")
	#ylim([0, 100])
	savefig("%s.png" % target)

print results
