// TO-DO: Course cards
// TO-DO: Delete a course
// TO-DO: hrefs (all navigations)

import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";

class ProfessorCourses extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <ProfessorNavbar />;
  }
}

export default ProfessorCourses;
