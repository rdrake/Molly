#!/usr/bin/env python3
import argparse
import fileinput
import json
import os.path
import sys

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from collections import defaultdict
from math import ceil

def parse_data(f):
    data = defaultdict(list)
    hops = []
    json_data = json.load(f)
    
    for result in json_data:
        (max_hops, method, mean) = (result["max-hops"],
                                    result["method"],
                                    result["results"]["mean"][0])
        
        data[method].append(mean)
        
        if max_hops not in hops:
            hops.append(max_hops)
    
    return (data, hops)

def label_axes(ax, title):
    ax.set_title(title)
    ax.set_xlabel("Hops")
    ax.set_ylabel("Time (s)")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Aggregates data and outputs charts")
    parser.add_argument("--results", dest="results", nargs="?", type=argparse.FileType("r"), default=sys.stdin, help="path to results file")
    parser.add_argument("--output", dest="output_path", required=True, help="path to output charts")
    args = parser.parse_args()
    
    parsed = parse_data(args.results)

    (data, hops) = parsed
    df = pd.DataFrame(data, index=hops)

    ncols = 2
    nrows = int(ceil(len(df.columns) / ncols))
    axes_pos = []

    (fig, axes) = plt.subplots(nrows=nrows, ncols=ncols)

    for i in range(ncols):
        for j in range(nrows):
            axes_pos.append(axes[i, j])

    for (i, method) in enumerate(df.columns):
        ax = axes_pos[i]
        label_axes(ax, method)
        df[method].plot(ax=ax)

    fig.tight_layout()
    fig.savefig(os.path.join(args.output_path, "methods-subplots.pgf"))

    ax = df.plot()
    label_axes(ax, "Comparsion of Methods")
    fig = plt.gcf()
    fig.savefig(os.path.join(args.output_path, "methods-compared.pgf"))
