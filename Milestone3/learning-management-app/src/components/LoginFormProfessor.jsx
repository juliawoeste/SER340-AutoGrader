import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "./services/authService";

class LoginFormProfessor extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };


  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data.email, data.password);
      await auth.login(data.email, data.password);
      // const { state } = this.props.location;
      window.location = "/professorCourses"; // state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section className="glasscard">
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </section>
    );
  }
}

export default LoginFormProfessor;
