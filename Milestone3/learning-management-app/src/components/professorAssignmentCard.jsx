import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProfessorAssignmentCard = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        class="card"
        style={{
          width: "18rem",
          align: "center",
          marginTop: "10rem",
          marginLeft: "33rem",
        }}
      >
        <div class="card-header">Course Assignments</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            onClick={() => navigate("professorSubmissionView")}
          >
            Assignment 1 (click works)
          </li>
          <li class="list-group-item">Assignment 2</li>
          <li class="list-group-item">Assignment 3</li>
        </ul>
        <button
          className="btn btn-primary"
          onClick={() => navigate("addAssignment")}
        >
          Add Assignment
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProfessorAssignmentCard;
