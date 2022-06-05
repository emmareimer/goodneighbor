import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

// import styled from "styled components";
import "../styles/SignUp.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  // import fonts and font colors from styleguide?

  const styles = {
    ContainerTitleStyle: {
      color: "var(--mine-shaft)",
      fontFamily: "var(--font-family-poppins)",
      fontSize: "var(--font-size-xxxl)",
      fontWeight: 500,
      fontStyle: "normal",
    },
    ContainerSubtitleStyle: {
      height: "48px",
      minWidth: "304px",
      textAlign: "center",
      letterSpacing: 0,
    },
    InputQuestions: {},
    InputContainer: {},
    CreateAccountButton: {},
  };

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        {/* HeaderNav w Login and Sign Up buttons, logo*/}
        <div className="createAccountPage">
          <div className="container-fluid col-4">
            <div className="card">
              <h1 className="card-header">
                <span>
                  <span style={styles.ContainerTitleStyle}>
                    Create an account
                  </span>
                </span>
              </h1>
              <h2 className="card-subtitle">
                <span style={styles.ContainerSubtitleStyle}>
                  Already have an Account? <a href="#">Login</a>{" "}
                </span>
              </h2>
              <div className="card-body">
                {data ? (
                  // dont forget to edit this message later!
                  <p>
                    Success! You may now head{" "}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <span style={styles.InputQuestions}>
                      What should we call you?
                    </span>
                    <input
                      style={styles.InputContainer}
                      className="form-input"
                      placeholder="Enter your profile name"
                      name="username"
                      type="text"
                      value={formState.username}
                      onChange={handleChange}
                    />
                    <span style={styles.InputQuestions}>
                      What's your email?
                    </span>
                    <input
                      className="form-input"
                      placeholder="Enter your email address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <span style={styles.InputQuestions}>Create a password</span>
                    <input
                      className="form-input"
                      placeholder="Enter your password"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <span style={styles.InputSubtitle}>
                      Use 8 or more characters with a mix of letters, numbers
                      /u0026 symbols{" "}
                    </span>
                    <button
                      styles={styles.CreateAccountButton}
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Create an account
                    </button>
                  </form>
                )}
                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
