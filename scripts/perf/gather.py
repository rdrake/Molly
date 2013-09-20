import logging
import json

from datetime import datetime
from subprocess import check_output

from common import get_datetime, dt_to_str

# Configure logging so we can be informed of progress, issues, etc.
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Some constants/settings
RUNS = 1
HOPS = 8

FROM = "instructor|109"
TO = "instructor|108"

methods = ["bfs", "bfs-atom", "bfs-ref", "ford-fulkerson"]
hops = map(lambda x: x + 1, range(HOPS))

cmd = "lein run --benchmark -c .properties -s \"%s\" -t \"%s\"" % (FROM, TO) 

run_count = 0

TOTAL_RUNS = len(hops) * len(methods) * RUNS

bench_start = get_datetime()
bench_start_str = dt_to_str(bench_start)

logger.info("Began benchmarks at %s" % bench_start)

results = []

for max_hops in hops:
    for method in methods:
        for i in range(RUNS):
            run_count += 1

            logger.info("Benchmarking... (%s, %d of %d, src:  %s, tgt:  %s, hops:  %d, remaining:  %d)" % (method, i + 1, RUNS, FROM, TO, max_hops, (TOTAL_RUNS - run_count)))

            run_cmd = "%s --algorithm %s --max-hops %d" % (cmd, method, max_hops)
            output = check_output(run_cmd, shell=True)

            print "==="
            print "%d %s %d" % (max_hops, method, i)
            print(output)   # Can monitor stdout in case of failure.

            results.append(json.loads(output))

            with open("%s-result.json" % bench_start_str, "w") as f:
                json.dump(results, f)

bench_end = get_datetime()

logger.info("Completed benchmarks at %s (%s elapsed)" % (bench_end, (bench_end - bench_start)))
