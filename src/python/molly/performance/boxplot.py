#!/usr/bin/env python3
import os.path

import matplotlib.pyplot as plt

from collections import defaultdict
from graph import Graph, METHODS

class BoxPlot(Graph):
    def parse_data(self, results_file):
        data = super().parse_data(results_file)
        reparsed_data = defaultdict(list)

        for result in data:
            max_hops = result["max-hops"]
            method = result["method"]
            samples = result["results"]["samples"]

            reparsed_data[method].append((max_hops, samples))

        return reparsed_data

    def plot(self):
        super().plot()

        for method in self.data.keys():
            fig = plt.figure()
            plt.hold = True

            plt.title("Growth of {}".format(METHODS[method]))
            plt.xlabel(self.xlabel)
            plt.ylabel(self.ylabel)
            
            plt.boxplot([samples for (max_hops, samples) in self.data[method]])

            fig.set_size_inches(*self.figsize)
            plt.savefig(os.path.join(self.args.output_path, "boxplot-{}-{}.pgf".format(self.args.ident, method)))

if __name__ == "__main__":
    plot = BoxPlot("wut", "Box plots for all samples", "Maximum Number of Hops", "Elapsed Time (ns)")
    plot.plot()
