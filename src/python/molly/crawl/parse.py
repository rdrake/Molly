from lxml.etree import XPath
from lxml.html import document_fromstring

from datetime import datetime

from collections import defaultdict

import re

import pickle

from network import Network

FRONTMATTER_LENGTH = 15
SCHEDULE_LENGTH = 7

class CourseParser:
    def __init__(self):
        self.date_format = "%b %d, %Y"
        self.time_format = "%I:%M %p"

    def _extract_datetime(self, text, format, separator, fn=None):
        datetimes = text.split(separator)

        try:
            start = datetime.strptime(datetimes[0], format)
            end = datetime.strptime(datetimes[1], format)

            return tuple(map(fn, (start, end)))
        except:
            return (None, None)

    def _extract_dates(self, text, separator=" to "):
        fn = lambda x: x.date()

        return self._extract_datetime(
            text, self.date_format, separator=separator, fn=fn)

    def _extract_times(self, text, separator=" - "):
        fn = lambda x: x.time()

        return self._extract_datetime(
            text, self.time_format, separator=separator, fn=fn)

    def _relative_index(self, i, offset):
        return FRONTMATTER_LENGTH - 1 + i * SCHEDULE_LENGTH + offset

    def parse(self, term_name, term_id, subject_name, subject_id, raw_courses):
        courses = []

        for (raw_title, raw_course) in raw_courses.items():
            raw_course = map(lambda x: x.split(": ")[-1], raw_course)

            try:
                components = raw_title.split(" - ")

                section_num = components[-1]
                code = components[-2]
                crn = components[-3]
                title = " - ".join(components[:-3])
            except:
                self.courses_counter -= 1
                self.courses_failed += 1

                continue

            levels = raw_course[1].replace("Levels: ", "").split(", ")
            campus = raw_course[2].replace("Campus", "")

            credits = float(re.findall("\d+.\d+", raw_course[6])[0])

            (reg_start, reg_end) = self._extract_dates(raw_course[0])

            course = {
                "title": title,
                "crn": crn,
                "code": code,
                "section_num": section_num,
                "levels": levels,
                "campus": campus,
                "credits": credits,
                "reg_start": reg_start,
                "reg_end": reg_end,
                "schedules": []
            }

            for i in range(
                    ((len(raw_course) - FRONTMATTER_LENGTH) /
                        SCHEDULE_LENGTH) - 1):
                (date_start, date_end) = self._extract_dates(
                    raw_course[self._relative_index(i, 4)],
                    separator=" - ")
                (time_start, time_end) = self._extract_times(
                    raw_course[self._relative_index(i, 1)])


                course["schedules"].append({
                    "week": raw_course[self._relative_index(i, 0)],
                    "days": raw_course[self._relative_index(i, 2)],
                    "room": raw_course[self._relative_index(i, 3)],
                    "type": raw_course[self._relative_index(i, 5)],
                    "instructor": raw_course[
                        self._relative_index(i, 6)]
                        .replace(" (P)", "").split(", ")[0],
                    "date_start": date_start,
                    "date_end": date_start,
                    "time_start": time_start,
                    "time_end": time_end,
                })

            courses.append(course)
        
        return courses

class MycampusParser:
    def __init__(self, school="U"):
        """
        Initializes some mycampus-specific URLs and parameters.

        Keyword arguments:
        school -- Durham College uses an empty string, UOIT uses
        'U' (default 'U')
        """

        # Set up some constants
        self.urls = {
            "TERM": "https://ssbp.mycampus.ca/prod/bwckschd.p_disp_dyn_sched",
            "SUBJECT": "https://ssbp.mycampus.ca/prod/bwckgens.p_proc_term_date",
            "COURSES": "https://ssbp.mycampus.ca/prod/bwckschd.p_get_crse_unsec",
        }

        self.selects = {
            "TERM": "p_term",
            "SUBJECT": "sel_subj",
        }

        self.params = {
            "TERM": {"TRM": school},
            "SUBJECT": lambda term: {
                self.selects["TERM"]: term, "TRM": school,
                "p_calling_proc": "bwckschd.p_disp_dyn_sched",
            },
            "COURSES": lambda term, subject: {
                self.selects["SUBJECT"]: ["dummy", subject], # Why...?
                "TRM": school, "term_in": term,
                "sel_day": "dummy",
                "sel_schd": "dummy", "sel_insm": "dummy",
                "sel_camp": "dummy", "sel_levl": "dummy",
                "sel_sess": "dummy", "sel_instr": "dummy",
                "sel_ptrm": "dummy", "sel_attr": "dummy",
                "sel_crse": "", "sel_title": "",
                "sel_from_cred": "", "sel_to_cred": "",
                "sel_camp": "%", "begin_hh": "0",
                "begin_mi": "0", "begin_ap": "a",
                "end_hh": "0", "end_mi": "0", "end_ap": "a",
            },
        }

        self.network = Network()
        self.courses_counter = 0
        self.courses_parsed = 0
        self.courses_failed = 0

        self._xpath_table = XPath(
            "//table[@class='datadisplaytable' and @width='100%']")
        self._xpath_courses = XPath("td[@class='dddefault']")

        self.undesired_values = (
            "Registration Availability", "Capacity", "Actual",
            "Remaining", "Seats", "Waitlist Seats",
            "Scheduled Meeting Times", "Week", "Type", "Time",
            "Days", "Where", "Date Range", "Schedule Type",
            "Instructors", "Class", "Date Range", "Attributes",
            "Syllabus Available",
        )

    def _options_from_select(self, text, name, fn=None):
        """
        Parses the (awful) HTML from mycampus and returns a lazy
        list of tuples in the form of (value, option text).

        Arguments:
        text -- The lxml document to search
        name -- The name of the select element to extract from

        Keyword arguments:
        fn -- A function to apply to options text, if given
        (default None)
        """
        doc = document_fromstring(text)
        options = doc.xpath("//select[@name='%s']/option" % name)

        for option in options:
            id = option.attrib["value"]
            content = option.text.strip()

            if id != "":
                if fn:
                    content = fn(content)
                
                yield (id, content)

    def _filter_undesired(self, L):
        L = map(lambda x: x.strip(), L)

        return filter(
            lambda x: not x.startswith(self.undesired_values), L
        )

    def _get_listing(self, key, params, fn=None):
        """
        Shortcut to self._options_from_select.  Downloads page
        first.

        Arguments:
        key -- Key gives the URL, select name, etc. to use
        params -- Parameters to POST

        Keyword arguments:
        fn -- Function to apply to options text.  Passed along
        to self._options_from_select
        """
        text = self.network.post_text(self.urls[key], params)

        return self._options_from_select(text, self.selects[key], fn)

    def _get_courses(self, text):
        doc = document_fromstring(text)
        raw_courses = {}

        for row in self._xpath_table(doc):
            for item in row.iterchildren():
                if item.tag == "th":
                    raw_title = item.text
                    self.courses_counter += 1

                for td in self._xpath_courses(item):
                    cleaned_text = self._filter_undesired(
                        td.text_content().split("\n")
                    )

                    if len(cleaned_text) > 1:
                        i = 0

                        while "Registration Dates" not in cleaned_text[i]:
                            i += 1

                        cleaned_text = cleaned_text[i:]
                        raw_courses[raw_title] = cleaned_text
        
        return raw_courses

    def parse(self):
        course_parser = CourseParser()
        courses = {}

        terms = self._get_listing(
            "TERM",
            self.params["TERM"],
            lambda x: x.replace(" (View Schedule Only)", "")
        )

        for (term_id, term_name) in terms:
            courses[(term_id, term_name)] = {}

            subject_params = self.params["SUBJECT"]
            subjects = self._get_listing("SUBJECT", subject_params(term_id))

            print("Processing %s" % term_name)

            for (subject_id, subject_name) in subjects:
                course_params = self.params["COURSES"]
                course_params = course_params(term_id, subject_id)

                if term_id == "200401" or term_id == "200309":
                    course_params["sel_instr"] = ["dummy", "%"]

                course_text = self.network.post_text(
                    self.urls["COURSES"],
                    course_params
                )

                raw_courses = self._get_courses(course_text)
                parsed_courses = course_parser.parse(
                    term_name, term_id, subject_name,
                    subject_id, raw_courses)

                courses[(term_id, term_name)][(subject_id, subject_name)] = parsed_courses

        print("Found:\t%s" % self.courses_counter)
        print("Parsed:\t%s" % self.courses_parsed)
        print("Failed:\t%s" % self.courses_failed)

        with open("courses.pickle", "w") as f:
            pickle.dump(courses, f)
                
if __name__ == "__main__":
    parser = MycampusParser()
    parser.parse()
