import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Card, Form, Button, Container} from "react-bootstrap";

const SignUp = () => {
  // set initial form state
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

  return (
    <main> 
      {/* HeaderNav with Login and SignUp buttons; GN logo*/}
      <div className="container-center-horizontal">
        <div className="signup screen">
        <Container>
          <Card>
            <Card.Header className="card-title center-text">
                  Create an account
            </Card.Header>
            <Card.Subtitle className="card-subtitle">
                Already have an Account? <a href="/login">Login</a>{" "}
            </Card.Subtitle>
            <Card.Body>
              {data ? (
                // dont forget to edit this message later!
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <Form className="signup-form" onSubmit={handleFormSubmit}>
                  <Form.Group controlId="username">
                    <Form.Label className="form-label" > What should we call you? </Form.Label>
                    <Form.Control
                      className="form-input"
                      placeholder="Enter your profile name"
                      name="username"
                      type="text"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label className="form-label" >What's your email?</Form.Label>
                    <Form.Control
                      className="form-input"
                      placeholder="Enter your email address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label className="form-label" >Create a password</Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="Enter your password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                      <span className="input-subtitle">
                        Use 8 or more characters with a mix of letters, numbers
                        /u0026 symbols
                      </span>
                    </Form.Group>
                <div className="button-center">
                  <Button
                    className="submit-button1"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    <span className="button-text-1">Create an account</span> 
                  </Button>
                </div>
                </Form>
              )}
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
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
}

export default SignUp;
