Outline

# Title Page
# Abstract
# Acknowledgements
# ToC
# List of {Tables,Figures,Algorithms}
# Chapter 1:  Introduction
- (why am I even bothering with this project in the first place?)
		- Outline (what to expect)

# Chapter 2:  Literature Review
		- (Need some help with this one)
  	- (Likely not titled "Literature Review")

# Chapter 3:  System Design and Rationale
## Introduction
- Data corpus and representation
		- Probably use Mycampus data as example throughout, representation as 

# Chapter 4:  System Implementation and Performance
## Introduction

# Chapter 5:  Utilizing Multicore Systems
## Introduction
## Implementation
		- Analysis of multi threaded vs. single threaded
## Conclusion
		- Was it worth the effort to make concurrent?

Goal:  Perform keyword queries on structured data (search engine with "meaning").

Stages:
 - Original data source
 - "Linked" data source
 - Fast (unstructured) full-text search
 - Algorithms & implementation
 - Consumable interface
 - User-friendly UI

Components:
 - Crawler
 - Indexer
 - Core
 - API
 - Front-end

"The System" deals with the data from its linked form to an API.  The crawler to obtain the original data and the user-friendly front-end are both developed independently.

Problems Encountered:
 - Inconsistencies in data
 - Developing a suitable representation of the data
 - Being able to take these independent pieces of data found by a simple keyword search and "link" them together
 - Evaluating importance of these links
 - Preparing an API which allows consumers to utilize all functions

Design & Implementation
 - Why Clojure, sqlite, Lucene, etc?

Introduction:


The Problem:


What's Been Done:


How I Plan on Doing It:


How I Did It:


What Happened:


---
Require:
 - Title/title page
 - Abstract
  - < 150 words
 - TOC
  - Auto-generated
 - Acknowledgements
  - Thank people for putting up with this
 - Introduction
  - What the problem is
	 - Keyword queries over corpus doesn't take into account "meaning"
	 - Currently faked with algorithms such as PageRank
	  - Run offline, this proposed solution runs online
	- Some definitions relevant to area
	- What to expect in remaining chapters
	 - Pure amazement
 - Literature Review
  - Thorough review of the research area
	 - What's been done, what hasn't
	  - Full-text search over databases has been
		- Lots of stuff on graph search
		- Unsure of what's been done with regard to linking together info found with keyword queries
	 - Have there been any similar approaches to what I've done
 - Philosophy of approach & plan of attack
  - Describe all the things
	 - Data representation
	 - Data transformations
	 - Data flow from start to finish
	- How I intend on implementing all of this
	 - Describe tools chosen for the job
	 - Propose algorithms?
 - Description of the work
  - How the system was built from start to finish
 - Critical analysis of the results
 - Future work
 - Conclusions
 - References
 - Appendix
