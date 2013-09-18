import csv

from collections import OrderedDict

from common import results, ns_to_ms

fields = OrderedDict([("hops", None), ("method", None), ("duration", None), ("execution_count", None), ("total_duration", None)])

rows = []

for (hops, method) in results:
    for (duration, execution_count, total_duration) in results[(hops, method)]:
        rows.append({
            "hops": hops,
            "method": method,
            "duration": ns_to_ms(duration),
            "execution_count": execution_count,
            "total_duration": ns_to_ms(total_duration)
        })

with open("data.csv", "w") as out:
    writer = csv.DictWriter(out, fieldnames=fields)

    writer.writeheader()
    writer.writerows(rows)
