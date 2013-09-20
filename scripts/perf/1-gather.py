# coding=utf-8

import csv
import logging
import re

from collections import OrderedDict
from datetime import datetime
from sh import lein

from common import get_datetime, dt_to_str, ns_to_ms

# Configure logging so we can be informed of progress, issues, etc.
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

patt = re.compile("Execution time mean : (\d+\.\d+) (m|µ)s")

# Some constants/settings
RUNS = 1
HOPS = 1 # Normally 8

FROM = "instructor|109"
TO = "instructor|108"

methods = ["bfs"]#, "bfs-atom", "bfs-ref", "ford-fulkerson"]
hops = map(lambda x: x + 1, range(HOPS))

lein = lein.bake("run",
    "--benchmark",
    c=".properties",
    s="\"%s\"" % FROM,
    t="\"%s\"" % TO
)

run_count = 0

TOTAL_RUNS = len(hops) * len(methods) * RUNS

bench_start = get_datetime()
bench_start_str = dt_to_str(bench_start)

logger.info("Began benchmarks at %s" % bench_start_str)

fields = OrderedDict([("idx", None), ("hops", None), ("method", None), ("duration", None)])

with open("%s-result.csv" % bench_start_str, "w") as f:
    writer = csv.DictWriter(f, fieldnames=fields)

    writer.writeheader()

    for max_hops in hops:
        for method in methods:
            for i in range(RUNS):
                run_count += 1

                logger.info("Benchmarking... (%s, %d of %d, src:  %s, tgt:  %s, hops:  %d, remaining:  %d)" % (method, i + 1, RUNS, FROM, TO, max_hops, (TOTAL_RUNS - run_count)))

                output = lein("--algorithm", method, "--max-hops", max_hops)
                
                print output

                output = str(output)

                print output

                r = patt.search(output)

                mean = float(r.group(1))

                if r.group(2) == "µ":
                    mean /= 1000

                writer.writerow({
                    "idx": run_count,
                    "hops": max_hops,
                    "method": method,
                    "duration": mean
                })

                f.flush()

bench_end = get_datetime()

logger.info("Completed benchmarks at %s (%s elapsed)" % (dt_to_str(bench_end), (bench_end - bench_start)))
