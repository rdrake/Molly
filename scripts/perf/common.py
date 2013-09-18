import pickle
import sys

# Hack to let this code run on a headless server
import matplotlib as mpl
mpl.use("Agg")

from collections import defaultdict
from datetime import datetime

#import mplrc.ieee.transaction_fullpage

#params = {
#   "font.serif": ["Garamond Premier Pro"]
#}

#mpl.pyplot.rcParams.update(params)

dashes = ["--", "-", ":", "-."] # Dashed, solid, dotted, dashed and dotted
hatches = ["\\\\\\", "---", "///", "x"]
#methods = set([method for (hops, method) in results])
#hops = set([hops for (hops, method) in results])

def ns_to_ms(ns):
    return ns / (1000.0 * 1000.0)

FORMAT_STR = "%Y-%m-%d-%H-%M-%S"

def dt_to_str(dt, format_str=FORMAT_STR):
    return dt.strftime(format_str)

def get_datetime(string=False):
    now = datetime.now()

    if string:
        return dt_to_str(now)

    return now
