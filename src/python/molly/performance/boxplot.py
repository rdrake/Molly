#!/usr/bin/env python2
import os.path

import matplotlib.pyplot as plt

from collections import defaultdict, OrderedDict
from sortedcontainers import SortedDict

from graph import Graph, METHODS, TARGETS

class BoxPlot(Graph):
    def parse_data(self, results_file):
        data = super(BoxPlot, self).parse_data(results_file)
        reparsed_data = defaultdict(SortedDict)

        for result in data:
            (target, method) = result
            samples = data[result]
            max_hops = TARGETS[target]

            reparsed_data[method][max_hops] = samples

        return reparsed_data

    def plot(self):
        super(BoxPlot, self).plot()

        for (method, vals) in self.data.iteritems():
            fig = plt.figure()
            plt.hold = True

            plt.title("Growth of {}".format(METHODS[method]))
            plt.xlabel(self.xlabel)
            plt.ylabel(self.ylabel)
            
            plt.boxplot([map(float, samples) for (max_hops, samples) in self.data[method].iteritems()])
            
            # Consider figsize=(3.5, 2.5) for presentation and papers
            fig.set_size_inches(*self.figsize)
            plt.savefig(os.path.join(self.args.output_path, "boxplot-{}.pgf".format(method)))
            plt.close()

if __name__ == "__main__":
    plot = BoxPlot("wut", "Box plots for all samples", "Maximum Number of Hops", "Elapsed Time (ms)")
    plot.plot()
