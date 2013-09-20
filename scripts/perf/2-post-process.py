# coding=utf-8

import pickle
import re
import sys

from collections import OrderedDict

patt = re.compile("Execution time mean : (\d+\.\d+) (ms|µs|sec)")

if len(sys.argv) != 2:
    sys.stderr.write("Usage:  %s <input_file>" % sys.argv[0])
    sys.exit(1)

input_file = sys.argv[1]

with open(input_file) as f:
    results = pickle.load(f)

with open(input_file, "w") as f:
    processed_results = defaultdict(list)

    for ((max_hops, method), results) in results.iteritems():
        for result in results:
            r = patt.search(result)
            mean = float(r.group(1))

            if r.group(2) == "µs":
                mean /= 1000
            elif r.group(2) == "sec":
                mean *= 1000

            processed_results[(max_hops, method)].append(mean)
    
    pickle.dump(processed_results, f)
