#!/usr/bin/env python3
import os.path

import matplotlib.pyplot as plt

from collections import defaultdict
from graph import Graph, METHODS

class LinePlot(Graph):
    def parse_data(self, results_file):
        data = super().parse_data(results_file)
        reparsed_data = defaultdict(list)
        self.max_hops = []

        for result in data:
            max_hops = result["max-hops"]
            method = result["method"]
            mean = result["results"]["mean"][0]

            reparsed_data[method].append((max_hops, mean))

            if max_hops not in self.max_hops:
                self.max_hops.append(max_hops)

        return reparsed_data

    def plot(self):
        super().plot()

        fig = plt.figure()

        plt.title("Method Runtime Growth Comparison")
        plt.xlabel(self.xlabel)
        plt.ylabel(self.ylabel)

        methods = list(self.data.keys())
        methods.sort()

        for method in methods:
            y = [mean for (max_hops, mean) in self.data[method]]
            plt.plot(self.max_hops, y, label=METHODS[method])

        plt.legend(loc="best")

        fig.set_size_inches(*self.figsize)
        plt.savefig(os.path.join(self.args.output_path, "lineplot-{}.pgf".format(self.args.ident)))

if __name__ == "__main__":
    plot = LinePlot("wut", "Line plots for all samples", "Maximum Number of Hops", "Elapsed Time (s)")
    plot.plot()

