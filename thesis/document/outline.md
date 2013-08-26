# Title Page #
# Abstract #
# Preface #

- Discuss progression from uncategorized to searchable
- Disadvantages of web search engine approach to discovering information
- Motivation for implementing Molly
    - Web search engines do not do linked data (nicely)
- Possibly (brief) introduction to FTSDB (eg. Lucene).

## Outline ##

- Brief overview of what is covered in each of the chapters
    - Very brief and concise
- Quick overview of the wondrous journey they are about to take with me through my thesis

# Table of Contents #
# List of Tables #
# List of Figures #
# List of Algorithms #

# Chapter 0:  Data Representation and Notation #

- Define the example corpus to be used throughout the thesis (mycampus?)
- Detail in-memory representation of value, entity, and group

# Chapter 1:  Literature Review #

- Need help with this one
    - Some keywords to search for or something

# Chapter 2:  System Design & Rationale #

- Various components comprising the software
    - Debate different algorithms that could be used in certain places
    - Crawler, Indexer, Core (Processing), API, Frontend
- Tie together the example corpus, representation, and how data flows through the system
    - DB Row -> Memory -> Document (for instance)

# Chapter 3:  System Implementation & Performance #

- Justification for choice of language, DB, FTSDB, etc.
- Implementation of chosen algorithm(s)

## Implementation issues ##

- eg. Data inconsistency, broke the indexer often
- What to do when things don''t connect, etc

## Performance ##

- How does the core code perform under different situations
    - Closely connected, loosely connected, disconnected
- Limiting factors
    - Max hops
- Possibly satisfaction with results vs. time
    - topk
- Possibly test server performance (how it handles concurrent connections)

# Chapter 4:  Concurrency & Impact on Performance #

- Talk about various methods of concurrency in Clojure (STM, Atoms, Agents)

## Implementation ##

- How concurrent code differs from single threaded code

## Performance ##

- How big (if any) of a speedup can be obtained with n cores?
    - May need to run on multiple machines with varying numbers of cores
    - Must compare the percent increase between numbers of cores
    - Cannot use time, various machines different speeds
- Speedups gained by STM, Atoms

# Conclusion #

- Sum up...
    - What was achieved
    - What was learned
    - What might be done in the future

# Appendix A:  Code Listing #

- Should be obvious
