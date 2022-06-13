import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TASK } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
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
    zipcode: 0,
    open: true,
    created_by: Auth.getProfile().data._id,
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
      zipcode: 0,
      open: true,
      created_by: Auth.getProfile().data._id,
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
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="name"
                placeholder="Task title"
                value={formState.name}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="taskDescription"
                placeholder="Mow my yard"
                value={formState.taskDescription}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="instructions"
                placeholder="Mow my yard"
                value={formState.instructions}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="zipcode"
                placeholder="Mow my yard"
                value={formState.zipcode}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Task
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
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
