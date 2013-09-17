import pickle

from collections import defaultdict
from datetime import datetime
from sh import java

# Some constants/settings
RUNS = 1

FROM = "instructor|109"
TO = "instructor|108"

methods = ["bfs", "bfs-atom", "bfs-ref", "ford-fulkerson"]
hops = [1, 2, 3, 4, 5, 6, 7, 8]

results = defaultdict(list)
x = range(RUNS)

# "Bake" some fixed parameters into the Java command
java = java.bake(
    "-Xss1024m",
    "-cp", ".:target/molly-1.0.0-SNAPSHOT-standalone.jar",
    "molly.core",
    "--source", FROM,
    "--benchmark",
    c="resources/.properties")

count = 0

for max_hops in hops:
    for method in methods:
        for i in range(RUNS):
            # Output of the command must be converted to a string
            output = str(java("--target", TO, "--algorithm", method, "--max-hops", max_hops))

            results[(max_hops, method)].append(output)

            count += 1

            #if count % 10 == 0:
            print "%d out of %d" % (count, RUNS)

out = file("%s-result" % datetime.now(), "wb")

pickle.dump(results, out)
