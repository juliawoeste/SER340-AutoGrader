// TO-DO: Course cards
// TO-DO: Delete a course
// TO-DO: hrefs (all navigations)

import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import ProfessorCourseCard from "./professorCourseCard";
import { getCourses } from "./services/courseService";
class ProfessorCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: getCourses(),
    };
  }
  handleDelete = (course) => {
    const courses = [...this.state.courses];
    const newCourses = courses.filter((r) => r.id !== course.id);
    this.setState({ courses: newCourses });
  };
  render() {
    return (
      <React.Fragment>
        <ProfessorNavbar />
        <ProfessorCourseCard
          courses={this.state.courses}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default ProfessorCourses;
