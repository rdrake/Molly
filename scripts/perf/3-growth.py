from common import *

targets.sort(key=lambda (name, hops): (hops, name))

clf()

xlabel("Hops")
ylabel("Average Time (ms)")

def average(target, method):
	vals = [float(x) for x in results[(target, method)]]
	return reduce(lambda x, y: x + y, vals) / len(vals)

x = [i + 1 for i in range(len(targets))]

for (i, method) in enumerate(methods):
	y = [average(target, method) for (target, hops) in targets]
	plot(x, y, label=method, linestyle=dashes[mod(i, len(dashes))], c="k")

legend(loc="upper left")
savefig("growth.pdf")
