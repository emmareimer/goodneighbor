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
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_ALL_TASKS_BY_ZIP_CODE } from "../utils/queries";
import Auth from "../utils/auth";
import searchZip from "../utils/search";
import { UPDATE_TASK_CLAIMED } from "../utils/mutations";
// import { toggle, toggleClass } from "../utils/card-expansion";

const Home = () => {
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentZip, setCurrentZip] = useState("");
  const [SearchByZip, { called, loading, data }] = useLazyQuery(
    GET_ALL_TASKS_BY_ZIP_CODE,
    {
      variables: { zipcode: parseInt(currentZip) },
    }
  );

  const [updateClaim, { error }] = useMutation(UPDATE_TASK_CLAIMED);

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

  const handleSearch = (event) => {
    event.preventDefault();
    searchZip().then((zips) => {
      setCurrentZip(zips[0]);
      SearchByZip().then((data) => {
        let info = data.data.tasks;

        console.log(info);
        setSearchedTasks(info);
      });
    });
  };

  const claimTask = async (event) => {
    if (Auth.loggedIn()) {
      console.log(event.target.name);
      console.log(Auth.getProfile().data._id);
      const { data } = await updateClaim({
        variables: {
          claimed_by: Auth.getProfile().data._id,
          id: event.target.name,
        },
      });
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
      {/* {Auth.loggedIn()} */}
      <Form className="search-bar" onSubmit={handleSearch}>
        <Row className="searchbar-row hide-desc">
          <Col xs={6}>
            <Form.Control
              placeholder="Search Zipcodes"
              className="zipcode-input"
              name="zipCode"
              type="numeric"
              id="zip-code"
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
            <Button className="zipcode-search" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="card-row scrollable-cards" id="open-tasks">
        {searchedTasks.map((element) => {
          if (element.open == true) {
            return (
              <Card className="displayed-task">
                <Card.Body>
                  <Row>
                    <Col className="image-placeholder"></Col>
                    <Col className="card-titles">
                      <Card.Title className="task-title">
                        {element.name}
                      </Card.Title>
                      <Card.Subtitle className="task-date">
                        {element.zipcode}
                      </Card.Subtitle>
                    </Col>
                  </Row>
                  <Row>
                    <Card.Subtitle className="task-subtitle">
                      Task Description
                    </Card.Subtitle>
                    <Card.Text className="task-description">
                      {element.description}
                    </Card.Text>

                    <Button
                      name={element._id}
                      onClick={(event) => claimTask(event)}
                    >
                      Claim Task
                    </Button>
                  </Row>
                </Card.Body>
              </Card>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default Home;
