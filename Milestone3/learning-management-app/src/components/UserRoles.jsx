import React, { Component } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";

class UserRoles extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="glasscard">
        <div className="title" style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "black", marginRight: "2rem" }}>
            Which user are you?
          </h3>
          <h4
            style={{
              color: "black",
              marginTop: "1rem",
              marginRight: "2rem",
            }}
          >
            Select one option to continue.
          </h4>
        </div>
        <div className="cards">
          <div className="card">
            <img
              className="professorpfp"
              src="styles/images/professor.png"
              alt=""
            />
            <div className="card-info">
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginLeft: "2rem" }}>QU Professor</h3>
                <div className="enter">
                  <Link to={"/professorLogin"}>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#487cec",
                        marginLeft: "8.8rem",
                      }}
                    >
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ marginTop: "3rem" }}>
            <img
              className="studentpfp"
              src="styles/images/student.png"
              alt=""
            />
            <div className="card-info">
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginLeft: "2rem" }}>QU Student</h3>
                <div className="enter">
                  <Link to={"/studentLogin"}>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#487cec",
                        marginLeft: "10rem",
                      }}
                    >
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserRoles;
