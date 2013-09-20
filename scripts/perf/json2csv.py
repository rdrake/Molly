import csv
import json
import sys

from collections import OrderedDict

if len(sys.argv) < 2:
    sys.stderr.write("Usage:  %s <input_file> [output_file]" % sys.argv[0])
    sys.exit(1)

input_file = sys.argv[1]

if len(sys.argv) == 3:
    output_file = sys.argv[2]
else:
    output_file = input_file.replace(".json", ".csv")

results = json.load(open(input_file))

fields = OrderedDict([("hops", None), ("method", None), ("duration", None)])

with open(output_file, "w") as f:
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()

    for result in results:
        method = result["method"]
        max_hops = result["max-hops"]
        samples = result["results"]["samples"]

        for sample in samples:
            writer.writerow({
                "hops": max_hops,
                "method": method,
                "duration": sample
            })
