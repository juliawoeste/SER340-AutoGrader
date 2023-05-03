// TO-DO: Implement cards
// TO-DO: Implement add assignment
// TO-DO: Delete assignment in list after the text
// TO-DO: hrefs (all navigations)
// TO-DO: professor view course requests from student

import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import ProfessorAssignmentCard from "./professorAssignmentCard";
import { Link } from "react-router-dom";
import { getCourses } from "./services/courseService";

const ProfessorAssignmentView = () => {
  const { course } = useParams();

  //const assignments = [...course.assignments];
  return (
    <div>
      <ProfessorNavbar />
      <h1>This is: {course}</h1>
    </div>
  );
};
//<ProfessorAssignmentCard course={course} />
export default ProfessorAssignmentView;
