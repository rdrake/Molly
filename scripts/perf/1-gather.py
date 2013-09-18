import logging
import csv

from collections import defaultdict, OrderedDict
from datetime import datetime
from sh import lein

from common import get_datetime, dt_to_str, ns_to_ms

# Configure logging so we can be informed of progress, issues, etc.
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Some constants/settings
RUNS = 10

FROM = "instructor|109"
TO = "instructor|108"

methods = ["bfs", "bfs-atom", "bfs-ref", "ford-fulkerson"]
hops = map(lambda x: x + 1, range(1))

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

fields = OrderedDict([("hops", None), ("method", None), ("duration", None), ("warmup_duration", None)])

with open("%s-result.csv" % bench_start_str, "w") as f:
    writer = csv.DictWriter(f, fieldnames=fields)

    writer.writeheader()

    for max_hops in hops:
        for method in methods:
            for i in range(RUNS):
                run_count += 1

                logger.info("Benchmarking... (%s, %d of %d, src:  %s, tgt:  %s, hops:  %d, remaining:  %d)" % (method, i + 1, RUNS, FROM, TO, max_hops, (TOTAL_RUNS - run_count)))

                output = str(lein("--algorithm", method, "--max-hops", max_hops))
                (duration, warmup_duration) = map(lambda x: ns_to_ms(int(x)), output.split())

                writer.writerow({
                    "hops": max_hops,
                    "method": method,
                    "duration": duration,
                    "warmup_duration": warmup_duration
                })

                f.flush()

bench_end = get_datetime()

logger.info("Completed benchmarks at %s (%s elapsed)" % (dt_to_str(bench_end), (bench_end - bench_start)))
