import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse, saveCourse } from "./services/courseService";
import auth from "./services/authService";
import { Link } from "react-router-dom";
import StudentCourseCard from "./StudentCourseCard";
import StudentNavbar from "./StudentNavbar";

const StudentCourses = () => {
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

  // const handleSearch = (event) => {
  //   setQuery(event.target.value);
  // };
  // const handleLike = (course) => {
  //   const index = courses.indexOf(course);
  //   let newCourses = courses;
  //   newCourses[index].liked = !newCourses[index].liked;
  //   setCourses(newCourses);
  //   setRerender(!rerender);
  // };

  // const handleAdd = async () => {
  //   const NewCourse = {
  //     name: "SER341",
  //     _professorId: "",
  //   };
  //   const { data: course } = await saveCourse(NewCourse);
  //   console.log(course);
  //   const newCourses = [course, ...courses];
  //   setCourses(newCourses);
  // };
  // const filterCourseByName = () => {
  //   if (query) {
  //     const filtered = courses.filter((p) =>
  //       p.name.toLowerCase().startsWith(query.toLowerCase())
  //     );
  //     return filtered;
  //   }
  //   return courses;
  // };
  // const filteredCourses = filterCourseByName();
  //
  //if (!auth.getCurrentUser()) {
  //   console.log("no user");
  //   window.location = "/professorLogin";
  // }
  return (
    <React.Fragment>
      <StudentNavbar />
      {/* <input
        type="text"
        className="form-control"
        name="search"
        placeholder="Search by Name"
        value={query}
        onChange={handleSearch}
      /> */}
      <StudentCourseCard courses={courses} />
    </React.Fragment>
  );
};

export default StudentCourses;
