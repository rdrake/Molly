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
    
    crn = Column(String(5), primary_key=True)
    reg_start = Column(Date)
    reg_end = Column(Date)
    credits = Column(Float, nullable=False)
    section_num = Column(String(3), nullable=False)
    term_id = Column(ForeignKey("Term.id"))
    course_code = Column(ForeignKey("Course.code"))
    levels = Column(String(16), nullable=False)

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

cache = {}

def get_or_create(session, model, **kwargs):
    cache_key = (model, str(kwargs))

    if (cache_key) not in cache:
        instance = model(**kwargs)
        cache[cache_key] = instance

        try:
            session.add(instance)
            session.commit()
        except:
            pass

    return cache[cache_key]

    #instance = session.query(model).filter_by(**kwargs).first()
    #
    #if instance:
    #    return instance
    #else:
    #    instance = model(**kwargs)
    #    session.add(instance)
    #
    #    return instance

if __name__ == "__main__":
    try:
        with open("courses.pickle", "r") as f:
            raw_courses = pickle.load(f)
    except:
        sys.exit("Unable to load pickle file.")

    engine = sa.create_engine("sqlite:///mycampus.db")
    TableBase.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)

    s = Session()
    i = 0

    for C in raw_courses:
        course = get_or_create(s, Course, code=C["code"], title=C["title"])
        term = get_or_create(s, Term, id=C["term_id"], name=C["term_name"])
        subject = get_or_create(s, Subject, id=C["subject_id"], name=C["subject_name"])
        instructor = get_or_create(s, Instructor, name=C["instructor"])
        location = get_or_create(s, Location, name=C["room"])
        campus = get_or_create(s, Campus, name=C["campus"])

        section = get_or_create(s, Section,
            crn=C["crn"],
            reg_start=C["reg_start"],
            reg_end=C["reg_end"],
            credits=C["credits"],
            section_num=C["section_num"],
            levels=", ".join(C["levels"]),
            course_code=course.code,
            term_id=term.id
        )

        schedule = get_or_create(s, Schedule,
            date_start=C["date_start"],
            date_end=C["date_end"],
            time_start=C["time_start"],
            time_end=C["time_end"],
            sch_type=C["type"],
            week=C["week"],
            days=C["days"],
            location_id=location.id,
            section_id=C["crn"],
            instructor_id=instructor.id
        )

        i += 1

        if i % 100 == 0:
            print(i)

            #s.commit()
    s.close()
