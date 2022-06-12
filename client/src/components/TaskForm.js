import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_TASK } from '../utils/mutations';
import { GET_USER_POSTED_TASKS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const TaskForm = () => {

    // -------------------------------------------------------------------------------------------------

    // const [name, setName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [addTask, { error }] = useMutation(ADD_TASK, {
        update(cache, { data: { addTask } }) {
            try {
                const { tasks } = cache.readQuery({ query: GET_USER_POSTED_TASKS });

                cache.writeQuery({
                    query: GET_USER_POSTED_TASKS,
                    data: { tasks: [addTask, ...tasks] },
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { tasks: [...me.tasks, addTask] } },
            });
        },
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addTask({
                variables: {
                    taskDescription,
                    // created_by: Auth.getProfile.data.username,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "taskDescription") {
            // setName(value);
            setTaskDescription(value);
        }
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
                            {/* <textarea
                                name="name"
                                placeholder="Task title"
                                value={name}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            >
                            </textarea> */}
                            <textarea
                                name="taskDescription"
                                placeholder="Mow my yard"
                                value={taskDescription}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
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
                    You need to request a task. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default TaskForm;