import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Card, Form, FormCheck, Button, Container } from "react-bootstrap";

const CreateTask = () => {
  // set initial form state
  const [formState, setFormState] = useState({
    username: "",
    description: "",
    instruction: "",
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
                Create a task
              </Card.Header>
              <Card.Subtitle className="card-subtitle">
                It's hard to ask for help. That's where we come in!
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
                    <Form.Group controlId="name">
                      <Form.Label className="form-label">
                        {" "}
                        What should we call this task?{" "}
                      </Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="Enter your task name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Label className="form-label">
                        How would you describe it?
                      </Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="Enter your task description"
                        name="description"
                        type="text"
                        value={formState.description}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="instruction">
                      <Form.Label className="form-label">
                        Do you have any special instructions for your neighbor?
                      </Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="Enter your special instructions"
                        name="instruction"
                        type="text"
                        value={formState.instruction}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {/* need help adding this to the form state */}
                    <Form.Group controlId="category">
                      <FormCheck.Label className="form-label">
                        Select a task category:
                      </FormCheck.Label>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            //   inline prop is just a placeholder for styling. ideally the icons would be above the radio buttons
                            inline
                            label={
                              <img
                                src="https://via.placeholder.com/150x30"
                                className="category-icon"
                                alt="purple plane icon"
                              />
                            }
                            name="Travel"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label={
                              <img
                                src="https://via.placeholder.com/150x30"
                                className="category-icon"
                                alt="orange paw icon"
                              />
                            }
                            name="Pets"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            inline
                            label={
                              <img
                                src="https://via.placeholder.com/150x30"
                                className="category-icon"
                                alt="green flower icon"
                              />
                            }
                            name="Plants"
                            type={type}
                            id={`inline-${type}-3`}
                          />
                          <Form.Check
                            inline
                            label={
                              <img
                                src="https://via.placeholder.com/150x30"
                                className="category-icon"
                                alt="pink cutlery icon"
                              />
                            }
                            name="Food"
                            type={type}
                            id={`inline-${type}-4`}
                          />
                        </div>
                      ))}
                    </Form.Group>
                    <div className="button-center">
                      <Button
                        className="submit-button1"
                        style={{ cursor: "pointer" }}
                        type="submit"
                      >
                        <span className="button-text-1">Create a task</span>
                      </Button>
                    </div>
                  </Form>
                )}
                {error && <div>{error.message}</div>}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default CreateTask;
