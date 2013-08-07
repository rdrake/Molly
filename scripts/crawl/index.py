try:
    import cPickle as pickle
except:
    import pickle

import sys

import sqlalchemy as sa

from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import exists

TableBase = declarative_base()

class Term(TableBase):
    __tablename__ = "Term"
    
    id = Column(String(6), primary_key=True)
    name = Column(String(255), nullable=False, unique=True)

class Subject(TableBase):
    __tablename__ = "Subject"
    
    id = Column(String(16), primary_key=True)
    name = Column(String(255), nullable=False, unique=True)

class Location(TableBase):
    __tablename__ = "Location"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String(255), nullable=False, unique=True, index=True)
    campus_id = Column(ForeignKey("Campus.id"))

class Instructor(TableBase):
    __tablename__ = "Instructor"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False, unique=True, index=True)

class Campus(TableBase):
    __tablename__ = "Campus"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False, unique=True, index=True)

class Course(TableBase):
    __tablename__ = "Course"
    
    code = Column(String(16), primary_key=True)
    title = Column(String(255), nullable=False)
    subject_id = Column(ForeignKey("Subject.id"))

class Section(TableBase):
    __tablename__ = "Section"
    
    crn = Column(Integer, primary_key=True)
    reg_start = Column(Date)
    reg_end = Column(Date)
    credits = Column(Float, nullable=False)
    section_num = Column(String(3), nullable=False)
    term_id = Column(ForeignKey("Term.id"))
    course_code = Column(ForeignKey("Course.code"))
    level = Column(String(16), nullable=False)

class Schedule(TableBase):
    __tablename__ = "Schedule"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    days = Column(String(16))
    sch_type = Column(String(64), nullable=False)
    date_start = Column(Date)
    date_end = Column(Date)
    week = Column(String(2))
    time_start = Column(Time)
    time_end = Column(Time)
    location_id = Column(ForeignKey("Location.id"))
    section_id = Column(ForeignKey("Section.crn"))
    instructor_id = Column(ForeignKey("Instructor.id"))

def get_or_create(session, model, **kwargs):
    instance = session.query(model).filter_by(**kwargs).first()
    if instance:
        return instance
    else:
        instance = model(**kwargs)
        return instance

if __name__ == "__main__":
    try:
        with open("courses.pickle", "r") as f:
            raw_courses = pickle.load(f)
    except:
        sys.exit("Unable to load pickle file.")

    engine = sa.create_engine("sqlite:///mycampus.db")
    TableBase.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)

    session = Session()

    terms = {}
    courses = {}
    locations = set()
    instructors = set()
    subjects = {}
    campuses = set()
    sections = {}

    for course in raw_courses:
        # General
        code = course["code"]
        title = course["title"]
        term_id = course["term_id"]
        term_name = course["term_name"]
        subject_id = course["subject_id"]
        subject_name = course["subject_name"]
        instructor = course["instructor"]
        location = course["room"]
        levels_ = course["levels"]
        campus = course["campus"]

        # Section-specific
        reg_start = course["reg_start"]
        reg_end = course["reg_end"]
        credits = course["credits"]
        crn = course["crn"]
        section_num = course["section_num"]

        # Schedule-specific
        date_start = course["date_start"]
        date_end = course["date_end"]
        time_start = course["time_start"]
        time_end = course["time_end"]
        type_ = course["type"]
        week = course["week"]
        days = course["days"]

        if code not in courses:
            courses[code] = title

        if term_id not in terms:
            terms[term_id] = term_name

        if subject_id not in subjects:
            subjects[subject_id] = subject_name

        instructors.add(instructor)
        locations.add(location)
        campuses.add(campus)

    print len(courses), len(terms), len(subjects), len(locations), len(instructors), len(campuses)

    #with engine.connect() as connection:
    #    pass

    session.add_all([Location(name=loc) for loc in locations])
    session.add_all([Instructor(name=inst) for inst in instructors])
    session.add_all([Campus(name=campus) for campus in campuses])

    for (id, name) in subjects.items():
        session.add(Subject(id=id, name=name))

    for (code, title) in courses.items():
        session.add(Course(code=code, title=title))

    for (id, name) in terms.items():
        session.add(Term(id=id, name=name))

    print session.query(exists().where(Instructor.name == "Ken Pu")).scalar()
    
    session.commit()
    session.close()

"""
All:
----------
code
date_end
time_end
campus
time_start
title
term_id
subject_id
date_start
reg_start
section_num
type
week
term_name
instructors
subject_name
credits
levels
reg_end
days
room
crn
"""
