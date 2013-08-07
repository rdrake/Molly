A set of scripts to crawl and index UOIT's [available courses](http://uoit.ca/mycampus/avail_courses.html) on mycampus.

## Scripts:

* network.py -- Responsible for all network traffic between mycampus and the computer running the script.  Wraps the [requests library](http://docs.python-requests.org/en/latest/index.html) and provides a simple cache using Python's pickle module.  This cache can grow fairly large (> 100 MB).
* parse.py -- Performs most of the work.  Uses network.py for all network communications.  Uses pickle to write out a dictionary of each course/section/schedule.
* index.py -- Takes the pickled file created by parse.py, normalizes it, and creates a database with the data.
