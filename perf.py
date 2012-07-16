from collections import defaultdict
from matplotlib.pyplot import *

import requests

RUNS = 1000

# Ken Pu
FROM = "instructors|74"

# Database Systems, Jeremy Bradbury, Outdoor Education
to = ["courses|csci_3030u", "instructors|75", "courses|educ_3482u"]

# Plain, Atom, STM
methods = ["plain", "atom", "stm"]

results = defaultdict(list)
x = [i + 1 for i in range(RUNS)]

for target in to:
	clf() # Clear any existing plots
	title("%s to %s" % (FROM, target))
	xlabel("Run")
	ylabel("Time (ms)")

	for method in methods:

		url = "http://localhost:8080/span?e0=%s&eL=%s&method=%s" % (FROM, target, methods)

		print "\n%s -> %s" % (target, method)

		for i in range(RUNS):
			data = requests.get(url).json
			results[(target, method)].append(data["debug"]["time"] / (1000 * 1000))

		plot(x, results[(target, method)], label=method)

	legend(loc="upper right")
	ylim([0, 50])
	savefig("%s.png" % target)

print results
