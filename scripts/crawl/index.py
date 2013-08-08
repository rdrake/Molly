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

def get_or_create(session, model, key, **kwargs):
    cache_key = (model, kwargs[key])

    if (cache_key) not in cache:
        instance = model(**kwargs)
        cache[cache_key] = instance

        session.add(instance)

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

    for ((term_id, term_name), subject) in raw_courses.items():
        s.add(Term(id=term_id, name=term_name))

        for ((subject_id, subject_name), courses) in subject.items():
            get_or_create(s, Subject, "id",
                id=subject_id,
                name=subject_name
            )

            for C in courses:
                course = get_or_create(s, Course, "code",
                    code=C["code"],
                    title=C["title"]
                )

                campus = get_or_create(s, Campus, "name",
                    name=C["campus"]
                )

                #section = Section(

                section = get_or_create(s, Section, "crn",
                    crn=C["crn"],
                    section_num=C["section_num"],
                    levels=", ".join(C["levels"]),
                    term_id=term_id,
                    reg_start=C["reg_start"],
                    reg_end=C["reg_end"],
                    credits=C["credits"]
                )

                s.add(section)

                for S in C["schedules"]:
                    instructor = get_or_create(s, Instructor, "name",
                        name=S["instructor"]
                    )

                    location = get_or_create(s, Location, "name",
                        name=S["room"],
                        campus_id=campus.id
                    )

                    s.add(Schedule(
                        days=S["days"],
                        sch_type=S["type"],
                        date_start=S["date_start"],
                        date_end=S["date_end"],
                        time_start=S["time_start"],
                        time_end=S["time_end"],
                        week=S["week"],
                        instructor_id=instructor.id,
                        section_id=section.crn,
                        location_id=location.id
                    ))

                i += 1

                if i % 100 == 0:
                    print(i)

                s.commit()
    s.close()
