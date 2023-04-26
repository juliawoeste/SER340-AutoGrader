// TO-DO: Implement cards
// TO-DO: Implement add assignment
// TO-DO: Delete assignment in list after the text
// TO-DO: hrefs (all navigations)
// TO-DO: professor view course requests from student

import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import ProfessorAssignmentCard from "./professorAssignmentCard";

class ProfessorAssignmentView extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <ProfessorAssignmentCard />
      </div>
    );
  }
}

export default ProfessorAssignmentView;
