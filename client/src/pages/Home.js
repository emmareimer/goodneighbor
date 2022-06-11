import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
  Row,
  ThemeProvider,
} from "react-bootstrap";
// import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";
import toggle from "../utils/card-expansion";

const Home = () => {
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // const [savedTaskIds, setSavedTaskIds] = useState(getSavedTaskIds());

  // const [addTask] = useMutation(ADD_TASK);

  // useEffect(() => {
  //     return () => saveTaskIds(savedTaskIds);
  // });

  const searchBar = () => {};

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchBar(searchInput.value);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const TaskData = items.map((Task) => ({
        zipcode: Task.zipcode,
      }));

      setSearchedTasks(TaskData);
      setSearchInput("");
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
    // <div className="bgImageHome">
    <Container className="home-page">
      {Auth.loggedIn()}
      <Form className="search-bar">
        <Row className="searchbar-row hide-desc">
          <Col xs={6}>
            <Form.Control
              placeholder="Search Zipcodes"
              className="zipcode-input"
              name="zipCode"
              type="numeric"
              id="zipcode"
            />
          </Col>
          <Col xs={4}>
            <Form.Control className="category-select" as="select">
              <option>All Categories</option>
              <option value="food">Food</option>
              <option value="landscaping">Landscaping</option>
              <option value="homeimprovement">Home Improvement</option>
              <option value="cleaning">Cleaning</option>
              <option value="furnitureassembly">Furniture Assembly</option>
              <option value="errands">Errands</option>
              <option value="moving">Moving</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Button className="zipcode-search">Search</Button>
          </Col>
        </Row>
      </Form>
      {/* <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a Task"
                  className="sbInput"
                  id="zip-code"
                />
              </Col>
              <Col xs={12} md={2}>
                <Form.Group controlId="formBasicSelect">
                  <Form.Control as="select" id="categories">
                    <option>All Categories</option>
                    <option value="food">Food</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="homeimprovement">Home Improvement</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="furnitureassembly">
                      Furniture Assembly
                    </option>
                    <option value="errands">Errands</option>
                    <option value="moving">Moving</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Button
                  className="searchButton"
                  type="submit"
                  variant="success"
                  size="lg"
                >
                  Search
                </Button>
              </Col>
              <Col>
                <form action="#">
                                    <label htmlFor="lang">Category</label>
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
          </Form> */}

      <Row className="card-row scrollable-cards">
        <Card className="displayed-task">
          <Card.Body>
            <Row>
              <Col className="image-placeholder"></Col>
              <Col className="card-titles">
                <Card.Title className="task-title">Task Name</Card.Title>
                <Card.Subtitle className="task-date">Task Date</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Card.Subtitle className="task-subtitle">
                Task Description
              </Card.Subtitle>
              <Card.Text className="task-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                vehicula odio. Sed elit justo, tincidunt vitae lacus eu,
                fringilla pellentesque nisl. Integer at erat id urna tempor
                vulputate nec at justo. Maecenas sed ipsum laoreet mi sodales
                fermentum ut eget augue. Cras blandit semper congue. Nulla
                dapibus quam turpis, vel tincidunt turpis consequat sed. Duis
                eget risus ex. Vestibulum ultricies nulla libero, a convallis
                elit porttitor id. Duis pellentesque enim ut nunc fermentum
                congue in in nibh. Proin ultrices elit lorem, rhoncus iaculis
                velit ultricies non. Suspendisse lobortis, eros eget lacinia
                mollis, eros dui efficitur ante, eu semper arcu diam vel mauris.
                Sed consectetur varius eros non facilisis.
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>

        <Card className="displayed-task">
          <Card.Body>
            <Row>
              <Col className="image-placeholder"></Col>
              <Col className="card-titles">
                <Card.Title className="task-title">Task 2 Name</Card.Title>
                <Card.Subtitle className="task-date">Task 2 Date</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Card.Subtitle className="task-subtitle">
                Task 2 Description
              </Card.Subtitle>
              <Card.Text className="task-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                vehicula odio. Sed elit justo, tincidunt vitae lacus eu,
                fringilla pellentesque nisl. Integer at erat id urna tempor
                vulputate nec at justo. Maecenas sed ipsum laoreet mi sodales
                fermentum ut eget augue. Cras blandit semper congue. Nulla
                dapibus quam turpis, vel tincidunt turpis consequat sed. Duis
                eget risus ex. Vestibulum ultricies nulla libero, a convallis
                elit porttitor id. Duis pellentesque enim ut nunc fermentum
                congue in in nibh. Proin ultrices elit lorem, rhoncus iaculis
                velit ultricies non. Suspendisse lobortis, eros eget lacinia
                mollis, eros dui efficitur ante, eu semper arcu diam vel mauris.
                Sed consectetur varius eros non facilisis.
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>

        <Card className="displayed-task">
          <Card.Body>
            <Row>
              <Col className="image-placeholder"></Col>
              <Col className="card-titles">
                <Card.Title className="task-title">Task 3 Name</Card.Title>
                <Card.Subtitle className="task-date">Task 3 Date</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Card.Subtitle className="task-subtitle">
                Task 3 description
              </Card.Subtitle>
              <Card.Text className="task-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                vehicula odio. Sed elit justo, tincidunt vitae lacus eu,
                fringilla pellentesque nisl.
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>

        <Card className="displayed-task">
          <Card.Body>
            <Row>
              <Col className="image-placeholder"></Col>
              <Col className="card-titles">
                <Card.Title className="task-title">Task 4 Name</Card.Title>
                <Card.Subtitle className="task-date">Task 4 Date</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Card.Subtitle className="task-subtitle">
                Task 4 description
              </Card.Subtitle>
              <Card.Text className="task-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                vehicula odio. Sed elit justo, tincidunt vitae lacus eu,
                fringilla pellentesque nisl. Integer at erat id urna tempor
                vulputate nec at justo. Maecenas sed ipsum laoreet mi sodales
                fermentum ut eget augue. Cras blandit semper congue. Nulla
                dapibus quam turpis, vel tincidunt turpis consequat sed. Duis
                eget risus ex.
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>

        <Card className="displayed-task">
          <Card.Body>
            <Row>
              <Col className="image-placeholder"></Col>
              <Col className="card-titles">
                <Card.Title className="task-title">Task 5 Name</Card.Title>
                <Card.Subtitle className="task-date">Task 5 Date</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Card.Subtitle className="task-subtitle">
                Task 5 Description
              </Card.Subtitle>
              <Card.Text className="task-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                vehicula odio. Sed elit justo, tincidunt vitae lacus eu,
                fringilla pellentesque nisl. Integer at erat id urna tempor
                vulputate nec at justo. Maecenas sed ipsum laoreet mi sodales
                fermentum ut eget augue.
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row className="card-row single-card">
        <Col xs={5}>
          <Row>
            <Card.Img className="placeholder-img"></Card.Img>
            <Card.Title>Dylan Marcy</Card.Title>
            <Card.Subtitle>@djmarcy</Card.Subtitle>
          </Row>
          <Row>
            <p>Zip Code: 80525</p>
          </Row>
        </Col>
        <Col xs={7}>
          <Row className="task-list">
            <Col className="image-placeholder"></Col>
            <Col>
              <Card.Title>Task 1</Card.Title>
              <Card.Subtitle>Date</Card.Subtitle>
            </Col>
          </Row>
          <Row className="task-list">
            <Col className="image-placeholder"></Col>
            <Col>
              <Card.Title>Task 2</Card.Title>
              <Card.Subtitle>Date</Card.Subtitle>
            </Col>
          </Row>
          <Row className="task-list">
            <Col className="image-placeholder"></Col>
            <Col>
              <Card.Title>Task 3</Card.Title>
              <Card.Subtitle>Date</Card.Subtitle>
            </Col>
          </Row>
          <Row className="task-list">
            <Col className="image-placeholder"></Col>
            <Col>
              <Card.Title>Task 4</Card.Title>
              <Card.Subtitle>Date</Card.Subtitle>
            </Col>
          </Row>
        </Col>
      </Row>

      <Container>
        {/* <h2>
                    {searchedTasks.length
                        ? `Viewing ${searchedTasks.length} results:`
                        : 'Search for a Task to begin'}
                </h2> */}
        <CardColumns>
          {searchedTasks.map((task) => {
            return (
              <Card key={task.taskId} border="dark">
                {task.image ? (
                  <Card.Img
                    src={task.image}
                    alt={`The cover for ${task.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <p className="small">Authors: {task.authors}</p>
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
    </Container>
  );
};

export default Home;
