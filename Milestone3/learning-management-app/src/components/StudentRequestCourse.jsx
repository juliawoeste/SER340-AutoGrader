// TO-DO: hrefs (all navigations)
// TO-DO: Database connection
import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse, saveCourse } from "./services/courseService";
import Joi from "joi";
import StudentNavbar from "./StudentNavbar";

const StudentRequestCourse = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getCourses();
      console.log(data);
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
    // TO-DO: Course Cards
    <React.Fragment>
      <StudentNavbar />
      <StudentRequestCourse courses={courses} />
    </React.Fragment>
  );
};

export default StudentRequestCourse;
