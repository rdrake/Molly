# Molly #

Molly is a system for automated knowledge discovery.

## Usage ##

This project uses [Lein](https://github.com/technomancy/leiningen) as its build system.

### Install dependencies ###

    lein deps

### Configuration ###

There are three configuration methods:

1.  .properties File - Used to specify the default database, index, and max-hops values.  Also used to specify top-k.
2.  Command Line - Can override database, index, and max-hops values from the .properties file.  Instructs the program on which actions to take.  Run without any arguments to see all options.
3.  config.clj - Blueprint for mapping the relational model to the document model.

### Build Index ###

The configuration file specifies the database and index paths.

    lein run -c .properties --index

### Perform Search ###

    lein run -c .properties --algorithm <bfs|bfs-ref|bfs-atom> \
        -s <source_id> -t <target_id> \
        [--debug] [--max-hops <max_hops>] [--benchmark]

### Benchmarking ###
  
  Benchmarking uses the [Criterium](https://github.com/hugoduncan/criterium) library.  Use the same command as in Perform Search with the `--benchmark` switch.

## License ##

Copyright 2013 Richard Drake

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at

    [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.

With contributions from [Dr. Ken Pu](http://leda.science.uoit.ca/kenpu/).
