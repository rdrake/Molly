A set of scripts to crawl and index UOIT's [available courses](http://uoit.ca/mycampus/avail_courses.html) on mycampus.

## Requirements

The recommended way of running these scripts is with virtualenv and pip.  First create a virtualenv.

    $ virtualenv venv

Source the environment:

    $ source venv/bin/activate

Install the required packages:

    $ pip install -r requirements.txt

You should have the following packages installed:

    $ pip freeze
    SQLAlchemy==0.8.2
    lxml==3.2.3
    requests==1.2.3
    wsgiref==0.1.2

## Scripts

* network.py -- Responsible for all network traffic between mycampus and the computer running the script.  Wraps the [requests library](http://docs.python-requests.org/en/latest/index.html) and provides a simple cache using Python's pickle module.  This cache can grow fairly large (> 100 MB).
* parse.py -- Performs most of the work.  Uses network.py for all network communications.  Uses pickle to write out a dictionary of each course/section/schedule.
* index.py -- Takes the pickled file created by parse.py, normalizes it, and creates a database with the data.
