import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


const Home = () => {
    const [searchedTasks, setSearchedTasks] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // const [savedTaskIds, setSavedTaskIds] = useState(getSavedTaskIds());

    // const [addTask] = useMutation(ADD_TASK);

    // useEffect(() => {
    //     return () => saveTaskIds(savedTaskIds);
    // });

    const searchBar = ()


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
                name: Task.name,
                description: Task.taskDescription,
                open: Task.open,
                category: Task.category,
                instruction: Task.instruction,
                zipcode: Task.zipcode,
            }));

            setSearchedTasks(TaskData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving a Task to our database
    const handleSaveTask = async (TaskId) => {
        // find the Task in `searchedTasks` state by the matching id
        const TaskToSave = searchedTasks.find((Task) => Task.TaskId === TaskId);
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }



        try {
            // console.log('TaskToSave: ', TaskToSave);
            // console.log('ADD_Task: ', addTask);
            const response = await saveTask({
                variables: { input: TaskToSave }
            });
            console.log('saveTask Response: ', response);
            if (response.errors) {
                throw new Error('something went wrong!');
            }

            // if Task successfully saves to user's account, save Task id to state
            setSavedTaskIds([...savedTaskIds, TaskToSave.TaskId]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>Search for Tasks!</h1>
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
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                <h2>
                    {searchedTasks.length
                        ? `Viewing ${searchedTasks.length} results:`
                        : 'Search for a Task to begin'}
                </h2>
                <CardColumns>
                    {searchedTasks.map((Task) => {
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
                                        <Button
                                            disabled={savedTaskIds?.some((savedTaskId) => savedTaskId === Task.TaskId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveTask(task.taskId)}>
                                            {savedTaskIds?.some((savedTaskId) => savedTaskId === task.TaskId)
                                                ? 'This task  has already been claimed!'
                                                : 'Claim this Task!'}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
}

export default Home;