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
RUNS = 1

# Ken Pu
FROM = "instructors|74"

# Database Systems, Jeremy Bradbury, Outdoor Education
to = ["courses|csci_3030u", "instructors|75", "courses|educ_3482u"]

# Plain, Atom, STM
#methods = ["plain", "atom", "stm"]
methods = ["bfs-bench", "bfs-ref-bench", "bfs-atom-bench"]

results = defaultdict(list)
x = range(RUNS)

# Should match the nn.nnn msec output of each command
patt = re.compile("(\d+\.\d+)")

# "Bake" some fixed parameters into the Java command
java = java.bake("-server", "molly.core", c="mycampus.properties")

for target in to:
	for method in methods:
		for i in range(RUNS):
			# Output of the command must be converted to a string
			output = str(java("--source", FROM, "--target", target, a=method))
			# Gra) the time taken
			val = patt.search(output).group(1)

			results[(target, method)].append(val)

out = file("%s-result" % datetime.now(), "wb")

pickle.dump(results, out)
