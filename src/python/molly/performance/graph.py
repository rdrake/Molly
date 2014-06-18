import argparse
import pickle
import sys

import matplotlib.pyplot as plt

METHODS = {
    "bfs": "Breadth-First Search (BFS)",
    "bfs-atom": "BFS w/Atoms",
    "bfs-ref": "BFS w/References"
}

TARGETS = {
    "instructors|75": 8,
    "schedules|schedules|4125sections|1636teaches|1139": 7,
    "courses|csci_4100u": 6,
    "schedules|schedules|11068sections|4263teaches|3619": 5,
    "instructors|375": 4,
    "schedules|schedules|19657sections|10081teaches|9551": 3,
    "courses|engr_3960u": 2,
    "schedules|schedules|1731sections|610teaches|338": 1
}

class Graph(object):
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
        self.data = self.parse_data(open(self.args.results, "rb"))

    def parse_data(self, results_file):
        return pickle.load(results_file)

    def parse_args(self):
        """
        args expects a list of tuples with the first element the
        argument and the second element the keyword arguments
        """
        parser = argparse.ArgumentParser(description=self.description)
        
        # , type=argparse.FileType("r+b"), default=sys.stdin
        parser.add_argument("--results", dest="results", nargs="?", help="path to results file")
        parser.add_argument("--output-dir", dest="output_path", required=True, help="path to output charts to")

        for arg in self.args:
            parser.add_argument(args[0], **args[1])

        return parser.parse_args()

    def plot(self, figsize=(6.25, 3)):
        self.figsize = figsize

if __name__ == "__main__":
    g = Graph("wat", "wat", "wat", "wat")
