import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse, saveCourse } from "./services/courseService";
import auth from "./services/authService";
import ProfessorNavbar from "./ProfessorNavbar";
import { Link } from "react-router-dom";
import ProfessorCourseCard from "./ProfessorCourseCard";

const ProfessorCourses = () => {
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

  const handleDelete = async (course) => {
    console.log(course);
    const newCourses = courses.filter((p) => p._id !== course._id);

    setCourses(newCourses);
    try {
      await deleteCourse(course._id);
    } catch (ex) {
      console.log("delete exception");
      if (ex.respond && ex.respond.status === 404) {
        alert("Course has already been deleted !");
        setCourses(courses);
      }
    }
  };
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
      <ProfessorNavbar />
      {/* <input
        type="text"
        className="form-control"
        name="search"
        placeholder="Search by Name"
        value={query}
        onChange={handleSearch}
      /> */}
      <ProfessorCourseCard courses={courses} onDelete={handleDelete} />
    </React.Fragment>
  );
};

export default ProfessorCourses;
