# /src #

This directory contains all source code for the project.

## Building/Using ##

This project makes extensive use of the [Cake](http://clojure-cake.org/) build system.  Cake also makes use of Maven under-the-hood to manage dependencies.

### Initial Dependencies ###

After installing Cake, run the following command in order to install all of the required dependencies.

    cake deps

Alternatively, just running `cake` should also pull down all dependencies.

### Running ###

Simply use the following command to run it:

    cake run -m
