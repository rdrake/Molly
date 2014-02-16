import argparse
import json
import sys

import matplotlib.pyplot as plt

METHODS = {
    "bfs": "Breadth-First Search (BFS)",
    "bfs_atom": "BFS w/Atoms",
    "bfs_ref": "BFS w/References",
    "ford_fulkerson": "Ford-Fulkerson"
}

class Graph:
    def __init__(self, title, description, xlabel, ylabel, args=[]):
        # Initialize variables
        self.title = title
        self.description = description
        self.xlabel = xlabel
        self.ylabel = ylabel
        self.args = args

        # Parse provided arguments
        self.args = self.parse_args()

        # Parse data
        self.data = self.parse_data(self.args.results)

    def parse_data(self, results_file):
        data = []
        json_data = json.load(results_file)

        return json_data

    def parse_args(self):
        """
        args expects a list of tuples with the first element the
        argument and the second element the keyword arguments
        """
        parser = argparse.ArgumentParser(description=self.description)

        parser.add_argument("--results", dest="results", nargs="?", type=argparse.FileType("r"), default=sys.stdin, help="path to results file")
        parser.add_argument("--output-dir", dest="output_path", required=True, help="path to output charts to")
        parser.add_argument("--ident", dest="ident", required=True, help="identifier for plot(s)")

        for arg in self.args:
            parser.add_argument(args[0], **args[1])

        return parser.parse_args()

    def plot(self, figsize=(6.25, 3)):
        self.figsize = figsize
