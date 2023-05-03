// TO-DO: Course cards
// TO-DO: Delete a course
// TO-DO: hrefs (all navigations)

import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import ProfessorCourseCard from "./professorCourseCard";
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
    const { courses } = this.props;
    return (
      <React.Fragment>
        <ProfessorNavbar />
        <ProfessorCourseCard courses={courses} onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default ProfessorCourses;
