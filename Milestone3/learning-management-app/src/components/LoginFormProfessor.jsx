// TO-DO: Check to see if inputs match any professor or student in database
// TO-DO: Send name as a prompt
// TO-DO: hrefs (all navigations)
import Joi from "joi-browser";
import "./styles/login-style.css";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import auth from "./services/authService";

const LoginFormProfessor = () => {
  const [state, setState] = useState({
    data: { email: "", password: "" },
    errors: {},
  });

  // if (!auth.getCurrentUser()) window.location = "/";
  const validate = () => {
    const schema = {
      email: Joi.string().required().label("Email"),
      password: Joi.string().required().label("Password"),
    };
    const { error } = Joi.validate(state.data, schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };
  const validateProperty = ({ name, value }) => {
    let schema = {
      email: Joi.string().required().label("Email"),
      password: Joi.string().required().label("Password"),
    };
    const obj = { [name]: value };
    schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };
  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors } || {};
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    setState((preValue) => {
      // Get the previous value of state
      return {
        ...preValue, // use the spread operator to get all the previous values of state
        [input.name]: input.value,
        errors: errors,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const errors = this.validate();
    // this.setState({ errors: errors || {} });
    setState((preValue) => {
      // Get the previous value of state
      return {
        ...preValue, // use the spread operator to get all the previous values of state
        //errors: errors || {},
      };
    });
    try {
      const { email, password } = state.data;
      console.log(email);
      auth.login(email, password);

      //const { state } = this.props.location;
      //console.log(state);

      window.location = "/professorCourses"; //state ? state.from.pathname : "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...state.errors };
        errors.email = ex.response.data;
        setState((preValue) => {
          // Get the previous value of state
          return {
            ...preValue, // use the spread operator to get all the previous values of state
            errors: errors,
          };
        });
      }
    }
    // console.log(this.state.email + " " + this.state.password);
  };
  return (
    <section className="glasscard">
      <div
        className="container"
        style={{
          width: "30rem",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Login </h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              defaultValue={state.data.email}
              onChange={handleChange}
              id="email"
              aria-describedby="emailHelp"
            />
            {state.errors.email && (
              <div className="alert alert-danger"> {state.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              defaultValue={state.data.password}
              name="password"
              onChange={handleChange}
              type="password"
              className="form-control"
            />
            {state.errors.password && (
              <div className="alert alert-danger"> {state.errors.password}</div>
            )}
            <button onClick={handleSubmit} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginFormProfessor;
