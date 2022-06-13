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
import Add from "../utils/card-expansion";

const Home = () => {
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentZip, setCurrentZip] = useState("");
  const [SearchByZip, { called, loading, data }] = useLazyQuery(
    GET_ALL_TASKS_BY_ZIP_CODE,
    {
      variables: { zipcode: currentZip },
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
      console.log(typeof zips[0]);
      setCurrentZip(zips[0]);
      SearchByZip().then((data) => {
        let info = data.data.tasks;

        console.log(data);
        console.log(info);
        setSearchedTasks(info);
      });
    });
  };

  const claimTask = async (event) => {
    // event.nativeEvent.stopPropagation();

    if (Auth.loggedIn()) {
      console.log(event.target.name);
      console.log(Auth.getProfile(), Auth.getProfile().data._id);
      const userId = Auth.getProfile().data._id || "";
      const { data } = await updateClaim({
        variables: {
          claimedBy: userId,
          updateTaskId: event.target.name || "",
        },
      });

      console.log(data);
    }
  };

  const Add = (event) => {
    return event.currentTarget.classList.add("show-desc");
  };

  return (
    <Container className="home-page">
      <Form className="search-bar" onSubmit={handleSearch}>
        <Row className="searchbar-row">
          <Col xs={8}>
            <Form.Control
              placeholder="Search Zipcodes"
              className="zipcode-input"
              name="zipCode"
              type="numeric"
              id="zip-code"
            />
          </Col>
          {/* <Col xs={4}>
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
          </Col> */}
          <Col xs="3">
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
              <Card
                key={element._id}
                className="hide-desc task-cards"
                onClick={Add}
              >
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
                  <Row className="task-desc">
                    <Card.Subtitle className="task-subtitle">
                      <strong>
                        <u>Task Description</u>
                      </strong>
                    </Card.Subtitle>
                    <Card.Text className="task-description">
                      {element.taskDescription}
                      <p>
                        <i>Special Instructions:</i>
                      </p>
                      {element.instructions}
                    </Card.Text>

                    <Button
                      name={element._id}
                      onClick={(event) => claimTask(event)}
                      className="claim-task"
                    >
                      Claim Task
                    </Button>
                    <i>
                      <a
                        href="https://www.flaticon.com/free-icons/clean"
                        title="clean icons"
                        className="attribution-link"
                      >
                        Clean icons created by srip - Flaticon
                      </a>
                    </i>
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
