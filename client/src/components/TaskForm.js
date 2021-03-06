import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { ADD_TASK } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { Form, Button } from "react-bootstrap";

const TaskForm = () => {
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: Auth.getProfile().data.email },
    skip: !Auth.loggedIn(),
  });
  // -------------------------------------------------------------------------------------------------

  // const [name, setName] = useState('');
  const [formState, setFormState] = useState({
    name: "",
    taskDescription: "",
    instructions: "",
    zipcode: "",
    open: true,
    createdBy: Auth.getProfile().data._id,
  });

  const [addTask, { error }] = useMutation(ADD_TASK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log();
    try {
      const { data } = await addTask({
        variables: { ...formState },
      });
    } catch (err) {
      console.log("hello");
      console.error(err);
    }
    setFormState({
      name: "",
      taskDescription: "",
      instructions: "",
      zipcode: "",
      open: true,
      createdBy: Auth.getProfile().data._id,
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setFormState({ ...formState, [event.target.name]: value });
  };

  // -------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>How can your neighbors help?</h3>

      {Auth.loggedIn() ? (
        <>
          <Form
            className="flex-column justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
            id="add-a-task"
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="What do you want to call your task?"
              value={formState.name}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></Form.Control>
            <Form.Control
              type="text"
              as="textarea"
              name="taskDescription"
              placeholder="Briefly describe what you need help with."
              value={formState.taskDescription}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></Form.Control>
            <Form.Control
              type="text"
              as="textarea"
              name="instructions"
              placeholder="Let your neighbor know how to complete the task. Please be specific."
              value={formState.instructions}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></Form.Control>
            <Form.Control
              type="text"
              as="textarea"
              name="zipcode"
              placeholder="What is your zipcode?"
              value={formState.zipcode}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></Form.Control>

            <div>
              <Button className="btn btn-primary claim-task" type="submit">
                Add Task
              </Button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </Form>
        </>
      ) : (
        <p>
          You need to request a task. Please <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TaskForm;
