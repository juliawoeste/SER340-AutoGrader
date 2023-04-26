import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const ProfessorCourseCard = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div class="card" style={{ width: "18rem", margin: "5rem" }}>
        <h5 class="card-header">Course Name</h5>
        <div className="card-body">
          <button
            onClick={() => navigate("professorAssignmentView")}
            class="btn btn-primary"
          >
            View Course
          </button>
          <button
            onClick={() => navigate("professorAssignmentView")}
            class="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfessorCourseCard;
