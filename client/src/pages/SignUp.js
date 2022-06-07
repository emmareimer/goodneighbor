import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Card, Form, Button} from "react-bootstrap";

const styles = {
  ContainerTitle: {
    color: "var(--mine-shaft)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(--font-size-xxxl)",
    fontWeight: 500,
    fontStyle: "normal",
  },
  ContainerSubtitle: {
    height: "48px",
    minWidth: "304px",
    textAlign: "center",
    letterSpacing: 0,
  },
  InputTitle: {
    minHeight: "24px",
    letterSpacing: 0,
    color: "var(--granite-gray3)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(--font-size-m)",
    fontWeight: 400,
    fontStyle: "normal",
  },
  InputContainer: {
    width: "715px",
    height: "56px",
    display: "flex",
    padding: "15px 24px",
    alignItems: "flex-start",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid var(--granite-gray-5)",
    // text styles for the placeholder text
    minHeight: "24px",
    letterSpacing: 0,
    color: "var(--granite-gray-32)",
    fontFamily: "var(--font-family-poppins)",
    fontSize: "var(--font-size-m)",
    fontWeight: 400,
    fontStyle: "normal",
  },
  SubmitButton: {
    width: "715px",
    height: "64px",
    display: "flex",
    padding: "15px 252.5px",
    alignItems: "flex-start",
    backgroundColor: "var(--blue-ribbon)",
    borderRadius: "40px",
    overflow: "hidden",
    opacity: 0.25,
  },
  ButtonText1: {
    // text styles
    letterSpacing: 0,
    marginLeft: "1px",
    minWidth: "209px",
    textAlign: "center",
    // or align text middle w CSS: display flex, flex-direction column, justify-content center
  },
};

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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        {/* HeaderNav with Login and SignUp buttons; GN logo*/}
        <div>
          <Card>
            <Card.Header>
                <span style={styles.ContainerTitle}>
                  Create an account
                </span>
            </Card.Header>
            <Card.Subtitle>
              <span style={styles.ContainerSubtitle}>
                Already have an Account? <a href="/login">Login</a>{" "}
              </span>
            </Card.Subtitle>
            <Card.Body>
              {data ? (
                // dont forget to edit this message later!
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group>
                    <Form.Label style={styles.InputTitle}>
                      What should we call you?
                    </Form.Label>
                    <Form.Control
                      style={styles.InputContainer}
                      className="form-input"
                      placeholder="Enter your profile name"
                      name="username"
                      type="text"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={styles.InputTitle}>What's your email?</Form.Label>
                    <Form.Control
                      className="form-input"
                      placeholder="Enter your email address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                    <Form.Group>
                      <Form.Label style={styles.InputTitle}>Create a password</Form.Label>
                      <Form.Control
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
                    </Form.Group>
                  <Button
                    styles={styles.SubmitButton}
                    className="btn btn-block btn-primary"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                   <div styles={styles.ButtonText1}> Create an account </div>
                  </Button>
                </Form>
              )}
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
