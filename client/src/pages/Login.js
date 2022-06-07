/*Stretch goals: 
Show/Hide password toggle icon.
Forget my password option (GET and DELETE hashed password from local storage?)
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
// import { normalizePathname } from "react-router/lib/router";
// import "../styles/Login.css"; (for font, color, and size variables)

const styles = {
  ContainerTitle: {
    color: "var(--mine-shaft)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(--font-size-xxxl)",
    fontWeight: 500,
    fontStyle: "normal",
  },
  InputTitle: {
    height: "48px",
    minHeight: "24px",
    minWidth: "304px",
    textAlign: "center",
    letterSpacing: 0,
    color: "var(--granite-gray3)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(font-size-m)",
    fontWeight: 400,
    fontStyle: "normal",
  },
  InputContainer: {
    width: "568px",
    height: "56px",
    borderRadius: "12px",
    border: "1px solid var(--granite-gray-5",
  },
  SubmitButton: {
    // how to do a light and dark version?
    width: "568px",
    height: "64px",
    display: "flex",
    padding: "15px 251.5px",
    alignItems: "flex-start",
    backgroundColor: "var(--blue-ribbon)",
    borderRadius: "32px",
    overflow: "hidden",
    opacity: 0.25,
    // text styles
    // height: "33px",
    minWidth: "65px",
    color:"(var--white)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(--font-size-xl)",
    fontWeight: 500,
    fontStyle: "normal",
    border: "1px solid var(--licorice)", 
    textAlign: "center",
    letterSpacing: 0,
  },
  Divider: {}, 
  Divider1: {},
  ButtonTitle: {},
  Redirectbutton: {},
};
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        {/* HeaderNav with Login and SignUp buttons; GN logo*/}
        <div className="card">
          <h1 className="card-header" style={styles.ContainerTitle}>
            Login to <span>goodneighbor</span>
          </h1>
          <div className="card-body">
            {/* Dont forget to edit link and message. */}
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <span style={styles.InputTitle}>Email address</span>
                <input
                  className="form-input"
                  placeholder=""
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <span style={styles.InputTitle}>Password</span>
                <input
                  className="form-input"
                  placeholder=""
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Log in
                </button>
              </form>
            )}
            <div styles={styles.Divider}>
                <div styles={styles.Divider1}>
                </div>
            </div>
            <span styles={styles.ButtonTitle}> Don't have an account? </span>
            <button
              styles={styles.RedirectButton}
              className="btn btn-block btn-primary"
              style={{ cursor: "pointer" }}
              type="button"
              onclick="/signup"
            >
              Sign up
            </button>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
