# Performance Scripts

These scripts are responsible for the collection, transformation, and aggregation of all performance data.  The end result should be a simple JSON file.

## Step 1:  Gather

This script executes the project the specified number of times, logging output to the specified location.  The output is a JSON file containing all performance metrics produced by the benchmarks.

**Note:** Requires Python 3.x.

  usage: gather.py [-h] --config CONFIG_PATH
  
  Gather benchmarks
  
  optional arguments:
    -h, --help            show this help message and exit
    --config CONFIG_PATH  path to configuration file
