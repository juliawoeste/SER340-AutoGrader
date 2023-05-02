// TO-DO: Check to see if inputs match any professor or student in database
// TO-DO: Send name as a prompt
// TO-DO: hrefs (all navigations)

import React, { Component } from "react";
import Joi from "joi-browser";
import "./styles/login-style.css";
import { Link } from "react-router-dom";

class LoginFormProfessor extends Component {
  //username = React.createRef();
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault(); //prevent submitting to the server
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            width: "30rem",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4>Professor Login</h4>
              <h6 style={{ marginTop: "2rem" }}>
                Sign in to your account to continue.
              </h6>
              <div className="row">
                <label
                  style={{
                    fontWeight: "bold",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  value={this.state.account.email}
                  onChange={this.handleChange}
                  name="email"
                  id="email"
                  type="text"
                  aria-aria-describedby="emailHelp"
                  className="form-control"
                />
              </div>
              {this.state.errors.email && (
                <div className="alert alert-danger">
                  {" "}
                  {this.state.errors.email}
                </div>
              )}
            </div>
            <div className="form-group">
              <label
                style={{
                  fontWeight: "bold",
                  marginTop: "2rem",
                  textAlign: "center",
                }}
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                value={this.state.account.password}
                onChange={this.handleChange}
                name="password"
                type="text"
                className="form-control"
              />
              {this.state.errors.password && (
                <div className="alert alert-danger">
                  {" "}
                  {this.state.errors.password}
                </div>
              )}
              <Link to={"/professorCourses"}>
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginFormProfessor;
