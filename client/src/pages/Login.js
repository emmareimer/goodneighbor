/*Stretch goals: 
Show/Hide password toggle icon.
Forget my password option (GET and DELETE hashed password from local storage?)
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Container, Card, Button, Form } from "react-bootstrap";


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
    // width: "568px",
    // height: "64px",
    // display: "flex",
    // padding: "15px 251.5px",
    // alignItems: "flex-start",
    // backgroundColor: "var(--blue-ribbon)",
    // borderRadius: "32px",
    // overflow: "hidden",
    // opacity: 0.25,
  },
  ButtonText1: {
    // height: "33px",
    // minWidth: "65px",
    // color: "(var--white)",
    // fontFamily: "var(--font-family-poppins)",
    // fontSize: "var(--font-size-xl)",
    // fontWeight: 500,
    // fontStyle: "normal",
    // border: "1px solid var(--licorice)",
    // textAlign: "center",
    // letterSpacing: 0,
  },
  Divider: {
    marginTop: "48px",
    display: "flex",
    alignItems: "flex-start",
    minWidth: "500px",
  },
  Divider1: {
    width: "290px",
    height: "2px",
    backgroundColor: "var(--granite-gray-42)",
  },
  SignUp: {
    width: "580px",
    marginTop: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "116px", 
  },
  ButtonTitle: {
    minHeight: "36px",
    minWidth: "288px",
    textAlign: "center",
    letterSpacing: 0, 
  },
  RedirectButton: {
    // width: "580px",
    // height: "64px",
    // marginTop: "16px",
    // display: "flex",
    // padding: "15px 248px", 
    // alignItems: "flex-start",
    // borderRadius: "32px", 
    // overflow: "hidden",
  },
  ButtonText2: {
    //   height: "33px",
    //   minWidth: "84px",
    //   textAlign: "center",
    //   letterSpacing: 0, 
  }
};
const Login = (props) => {
    // set initial form state
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
    <main>
      <div className="container-center-horizontal">
          <div className="login screen">
            {/* HeaderNav with Login and SignUp buttons; GN logo*/}
            <Container>
                <Card>
                  <Card.Header className="card-title center-text">
                    Login to <span className="logo-text">goodneighbor</span>
                  </Card.Header>
                  <Card.Body>
                    {/* Dont forget to edit link and message. */}
                    {data ? (
                      <p>
                        Success! You may now head{" "}
                        <Link to="/">back to the homepage.</Link>
                      </p>
                    ) : (
                      <Form className="signup-form" onSubmit={handleFormSubmit}>
                        <Form.Group controlId="email">
                        <Form.Label className="form-label" style={styles.InputTitle}>Email address</Form.Label>
                        <Form.Control
                          className="form-input"
                          placeholder=""
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="form-label" style={styles.InputTitle}>Password</Form.Label>
                            <Form.Control
                              className="form-input"
                              placeholder=""
                              name="password"
                              type="password"
                              value={formState.password}
                              onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                          className="button-login"
                          style={{ cursor: "pointer" }}
                          type="submit"
                        >
                        Log in
                        </Button>
                      </Form>
                    )}
                    <div styles={styles.Divider}>
                      <div styles={styles.Divider1}></div>
                    </div>
                    <Card.Footer styles={styles.SignUp}>
                        <span styles={styles.ButtonTitle}> Don't have an account? </span>
                        <Button
                          className="redirect-button"
                          style={{ cursor: "pointer" }}
                          type="button"
                        //   onClick="/signup"
                        >
                         <div className="button-text-2" > Sign up </div>
                        </Button>
                    </Card.Footer>
                    {error && (
                      <div className="">
                        {error.message}
                      </div>
                    )}
                  </Card.Body>
                </Card>
            </Container>
          </div>
      </div>
    </main>
  );
};

export default Login;
