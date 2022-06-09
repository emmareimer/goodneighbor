import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// const styles = {
//     body {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         margin: "0 auto",
//         height: "100vh",
//         background-color: "#f1f1f1",
//       },

//    input {
//     display: "flex",
//         alignItems: "center",
//             justifyContent: "center",
//                 margin: "0 auto",
// }
// }

const Home = () => {
    const [searchedTasks, setSearchedTasks] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // const [savedTaskIds, setSavedTaskIds] = useState(getSavedTaskIds());

    // const [addTask] = useMutation(ADD_TASK);

    // useEffect(() => {
    //     return () => saveTaskIds(savedTaskIds);
    // });

    const searchBar = () => {

    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchBar(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { items } = await response.json();

            const TaskData = items.map((Task) => ({
                zipcode: Task.zipcode,
            }));

            setSearchedTasks(TaskData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // // create function to handle saving a Task to our database
    // const handleSaveTask = async (TaskId) => {
    //     // find the Task in `searchedTasks` state by the matching id
    //     const taskToSave = searchedTasks.find((Task) => Task.TaskId === TaskId);
    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }



    //     try {
    //         // console.log('TaskToSave: ', TaskToSave);
    //         // console.log('ADD_Task: ', addTask);
    //         const response = await saveTask({
    //             variables: { input: TaskToSave }
    //         });
    //         console.log('saveTask Response: ', response);
    //         if (response.errors) {
    //             throw new Error('something went wrong!');
    //         }

    //         // if Task successfully saves to user's account, save Task id to state
    //         setSavedTaskIds([...savedTaskIds, TaskToSave.TaskId]);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div>
            <Jumbotron fluid className='text-light bg-muted'>
                <Container>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a Task'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg'>
                                    Submit Search
                                </Button>
                            </Col>
                            <Col>
                                <form action="#">
                                    <label for="lang">Language</label>
                                    <select name="languages" id="lang">
                                        <option value="food">food</option>
                                        <option value="landscaping">landscaping</option>
                                        <option value="homeimprovement">home improvement</option>
                                        <option value="cleaning">cleaning</option>
                                        <option value="furnitureassembly">furniture assembly</option>
                                        <option value="errands">errands</option>
                                        <option value="moving">moving</option>
                                    </select>
                                    <input type="submit" value="Submit" />
                                </form>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                {/* <h2>
                    {searchedTasks.length
                        ? `Viewing ${searchedTasks.length} results:`
                        : 'Search for a Task to begin'}
                </h2> */}
                <CardColumns>
                    {searchedTasks.map((task) => {
                        return (
                            <Card key={task.taskId} border='dark'>
                                {task.image ? (
                                    <Card.Img src={task.image} alt={`The cover for ${task.title}`} variant='top' />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{task.title}</Card.Title>
                                    <p className='small'>Authors: {task.authors}</p>
                                    <Card.Text>{task.description}</Card.Text>
                                    {Auth.loggedIn() && (
                                        <Button>
                                            {/* disabled={savedTaskIds?.some((savedTaskId) => savedTaskId === Task.TaskId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveTask(task.taskId)}>
                                            {savedTaskIds?.some((savedTaskId) => savedTaskId === task.TaskId)
                                                ? 'This task  has already been claimed!'
                                                : 'Claim this Task!'} */}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </div>
    );
}

export default Home;