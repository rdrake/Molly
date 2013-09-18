import pickle
import logging

from collections import defaultdict
from datetime import datetime
from sh import lein

# Configure logging so we can be informed of progress, issues, etc.
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Some constants/settings
RUNS = 100

FROM = "instructor|109"
TO = "instructor|108"

methods = ["bfs", "bfs-atom", "bfs-ref", "ford-fulkerson"]
hops = map(lambda x: x + 1, range(8))

results = defaultdict(list)
x = range(RUNS)

lein = lein.bake("run",
    "--benchmark",
    c=".properties",
    s="\"%s\"" % FROM,
    t="\"%s\"" % TO
)

run_count = 0

TOTAL_RUNS = len(hops) * len(methods) * RUNS

bench_start = datetime.now()

logger.info("Began benchmarks at %s" % bench_start)

for max_hops in hops:
    for method in methods:
        for i in range(RUNS):
            run_count += 1

            logger.info("Benchmarking... (%s, %d of %d, src:  %s, tgt:  %s, hops:  %d, remaining:  %d)" % (method, i + 1, RUNS, FROM, TO, max_hops, (TOTAL_RUNS - run_count)))

            output = tuple(map(lambda x: int(x), str(
                lein("--algorithm", method, "--max-hops", max_hops)
            ).strip().split()))

            results[(max_hops, method)].append(output)

bench_end = datetime.now()

logger.info("Completed benchmarks at %s (%s elapsed)" % (bench_end, (bench_end - bench_start)))

with file("%s-result" % bench_end, "wb") as out:
    pickle.dump(results, out)
