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
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <ProfessorNavbar />
        <ProfessorCourseCard onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default ProfessorCourses;
