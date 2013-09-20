# coding=utf-8

import csv
import pickle
import re
import sys

from collections import OrderedDict

patt = re.compile("Execution time mean : (\d+\.\d+) (m|µ)s")

if len(sys.argv) != 2:
    sys.stderr.write("Usage:  %s <input_file>" % sys.argv[0])
    sys.exit(1)

input_file = sys.argv[1]
results = pickle.load(open(input_file))

fields = OrderedDict([("idx", None), ("hops", None), ("method", None), ("duration", None)])

with open(input_file.replace(".pickle", ".csv"), "w") as f:
    writer = csv.DictWriter(f, fieldnames=fields)
    counter = 0

    writer.writeheader()

    for ((max_hops, method), results) in results.iteritems():
        for result in results:
            counter += 1

            r = patt.search(result)
            mean = float(r.group(1))

            if r.group(2) == "µ":
                mean /= 1000

            print mean

            writer.writerow({
                "idx": counter,
                "hops": max_hops,
                "method": method,
                "duration": mean
            })
