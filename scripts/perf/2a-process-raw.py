# coding=utf-8

import pickle
import re
import sys

from collections import defaultdict

from common import get_datetime

if len(sys.argv) != 2:
    sys.stderr.write("Usage:  %s <input_file>")
    sys.exit(1)

f = open(sys.argv[1])
lines = f.readlines()

entries = defaultdict(list)

patt = re.compile("Execution time mean : (\d+\.\d+) (ms|µs|sec)")

new_block = False
header = None

for line in lines:
    line = line.strip()
    
    if line == "===":
        new_block = True
    else:
        if new_block:
            (max_hops, method, num) = line.split()
            header = (int(max_hops), method)
            new_block = False
        else:
            r = patt.search(line)
        
            if r:
                mean = float(r.group(1))
                
                if r.group(2) == "µs":
                    mean /= 1000
                elif r.group(2) == "sec":
                    mean *= 1000
                
                entries[header].append(mean)

with open("%s-result.pickle" % get_datetime(string=True), "w") as f:
    pickle.dump(entries, f)
