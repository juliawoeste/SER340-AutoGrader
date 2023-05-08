import React, { Component } from "react";
import Joi from "joi";
import StudentNavbar from "./StudentNavbar";
import ProfessorNavbar from "./ProfessorNavbar";

class ProfessorSubmissionView extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <section className="glasscard">
          <form>
            <div className="form-group">
              <h4 style={{ marginTop: "3rem" }}>Assignment</h4>
              <h5 style={{ marginTop: "1rem" }}>Assignment Title</h5>
              <h5 style={{ marginTop: "1rem" }}> Assignment Due Date</h5>
              <h5 style={{ marginTop: "1rem" }}>Assignment Description</h5>
              <div
                className="grades"
                style={{
                  display: "flex",
                  marginLeft: "9rem",
                  marginTop: "3rem",
                }}
              ></div>
              <div
                className="table"
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  marginLeft: "7rem",
                }}
              >
                <table id="table">
                  <thead>
                    <tr>
                      <th data-field="name" data-sortable="true">
                        Student Name
                      </th>
                      <th data-field="status" data-sortable="true">
                        Submission Status
                      </th>
                      <th data-field="grade">Grade</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default ProfessorSubmissionView;
