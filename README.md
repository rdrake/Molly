# Molly #

Molly is a system for automated knowledge discovery.

## Requirements ##

This project uses [Lein](https://github.com/technomancy/leiningen) as its build system.  In order to run Molly, you must have [Java](http://java.com/) installed.

Other components require additional software.

### Building the Database ###

A set of scripts for crawling [mycampus](http://uoit.ca/mycampus/) and constructing the mycampus database.  These live in `src/python/molly/crawl`.

Requirements:

 - Python 2.x
 - [SQLAlchemy](http://www.sqlalchemy.org/)
 - [lxml](http://lxml.de/)
 - [requests](http://www.python-requests.org/)

### Running Benchmarks ###

Running the benchmarks is a two step process.  The first executes the benchmark as instructed by the configuration file.  The second aggregates and filters the output from the first step.

Requirements:

 - Python 3.x
 - [NumPy](http://www.numpy.org/)
 - [SciPy](http://scipy.org/)
 - [matplotlib](http://matplotlib.org/)
 - [pandas](http://pandas.pydata.org/)

## Configuration ##

There are three configuration methods.

### Properties File ###

Specifies the default database, index, and max-hops values.  Also used to specifies top-k values.

### Command Line ###

Can override max-hops value from the properties file.  Instructs the program on which actions to take.  Run without any arguments to see all options.

   Switches                     Default  Desc
   --------                     -------  ----
   -c, --config                          Path to configuration (properties) file
   --algorithm                           Algorithm to run
   -s, --source                          Source node
   -t, --target                          Target node
   --max-hops                            Maximum number of hops before stopping
   --no-index, --index          false    Build an index of the database
   --no-benchmark, --benchmark  false    Run benchmarks
   -d, --no-debug, --debug      false    Displays additional information.
   -h, --no-help, --help        false    Show help

### config.clj ###

Blueprint for mapping the relational model to the document model.

## Execution ##

See the Makefile for example command usage.

## License ##

Copyright 2013 Richard Drake

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.

## Credits ##

With contributions from [Dr. Ken Pu](http://leda.science.uoit.ca/kenpu/).
