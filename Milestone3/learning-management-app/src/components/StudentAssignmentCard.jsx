import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentAssignmentCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { assignments } = this.props;
    const { courseId } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h3 style={{ marginTop: "4rem" }}>
              There are {assignments.length} assignments!
            </h3>
          </div>
          <div className="row" style={{ marginTop: "4rem" }}>
            {assignments.map((assignment, index) => (
              <div className="col-sm">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="card-title">{assignment.assignmentTitle}</h6>
                  </div>
                  <div className="card-body h-50">
                    <h2 className="card-subtitle mb-2 text-muted">
                      {assignment.dueDate}
                    </h2>
                    <h4 className="card-text">{assignment.description}</h4>
                  </div>
                  <div className="card-body">
                    <Link
                      to={`/studentCourses/${courseId}/studentAssignmentView/${assignment._id}`}
                    >
                      <button
                        onClick={() => ""}
                        className="btn btn-primary"
                        style={{ marginLeft: "1rem" }}
                      >
                        View Assignment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentAssignmentCard;
