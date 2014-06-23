#!/usr/bin/env python2
import os.path

import matplotlib.pyplot as plt
import numpy as np

from collections import defaultdict
from sortedcontainers import SortedDict

from graph import Graph, METHODS, TARGETS

dashes = ["--", "-", ":"] # Dashed, solid, dotted

class LinePlot(Graph):
    def parse_data(self, results_file):
        data = super(LinePlot, self).parse_data(results_file)
        reparsed_data = defaultdict(SortedDict)
        self.max_hops = []

        for result in data:
            (target, method) = result
            samples = data[result]
            max_hops = TARGETS[target]
            self.max_hops.append(max_hops)

            reparsed_data[method][max_hops] = np.mean(map(float, samples))

        return reparsed_data

    def plot(self):
        super(LinePlot, self).plot()

        fig = plt.figure()

        plt.title("Method Runtime Growth Comparison")
        plt.xlabel(self.xlabel)
        plt.ylabel(self.ylabel)

        methods = list(self.data.keys())
        methods.sort()

        for (i, method) in enumerate(methods):
            x = []
            y = []

            for (max_hops, mean) in self.data[method].iteritems():
                x.append(max_hops)
                y.append(mean)
            
            plt.plot(x, y, label=METHODS[method], linestyle=dashes[i % len(dashes)], c="k")

        plt.legend(loc="best")

        fig.set_size_inches(*self.figsize)
        plt.savefig(os.path.join(self.args.output_path, "lineplot.pgf"))

if __name__ == "__main__":
    plot = LinePlot("wut", "Line plots for all samples", "Maximum Number of Hops", "Elapsed Time (s)")
    plot.plot()

