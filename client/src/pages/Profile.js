import { useState, React } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

import PostedTasks from "../components/PostedTasks";
import ClaimedTasks from "../components/ClaimedTasks";
import TaskForm from "../components/TaskForm";

import { QUERY_ME, GET_SINGLE_TASK } from "../utils/queries";

import Auth from "../utils/auth";
import { Col, Row, Image, Card, Button, Container } from "react-bootstrap";
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";

import Toggle from "../utils/card-expansion";

const Profile = () => {
    const [currentTask, setCurrentTask] = useState("");
    const [userTasks, setUserTasks] = useState([]);
    const [SearchByTaskId, { }] = useLazyQuery(GET_SINGLE_TASK, {
        variables: { taskId: currentTask },
    });

    const { email: userParam } = useParams();
    console.log(userParam);
    const { loading, data } = useQuery(QUERY_ME, {
        variables: { email: Auth.getProfile().data.email },
        skip: !Auth.loggedIn(),
    });
    console.log("profile: ", Auth.getProfile().data);

    if (loading) {
        return <div>Loading...</div>;
    }

    // guard
    if (!Auth.loggedIn()) {
        console.log("Not logged in");
        return <h4>Please sign in.</h4>;
    }

    const user = data?.me;
    console.log("user: ", user);

    const Toggle = (event) => {
        return event.currentTarget.classList.toggle("show-desc");
    };

    // let taskData = [];
    // user.posted_tasks.forEach((id) => {
    //     SearchByTaskId(id).then((data) => {
    //         let info = data.data.task;

    //         console.log(data);
    //         console.log(info);
    //         taskData.push(info);
    //         console.log(info);
    //         setUserTasks(taskData);
    //     });
    // });

    return (
        // the profile card is naturally going to be pretty dry. Do we want to add a default stock image as a stand in for profile pics?
        <>
            <h1>{user.username + `'s`} Profile</h1>
            <Row className="profile-card">
                <Col>
                    <Image
                        src="../assets/dylan.jpg"
                        className="dylan-img d-flex flex-column"
                    />
                    <h2 className="profile-h2">{user.username}</h2>
                    <h3 className="profile-h3">{user.email}</h3>
                </Col>
                <Col>
                    <h2>Claimed tasks</h2>
                    {/* {userTasks.map((element) => {
            return (
              <Card
                key={element._id}
                className="hide-desc task-cards"
                onClick={Toggle}
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
          })} */}

                    <Card className="hide-desc task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="image-placeholder"></Col>
                                <Col className="card-titles">
                                    <Card.Title className="task-title">Name</Card.Title>
                                    <Card.Subtitle className="task-date">Zipcode</Card.Subtitle>
                                </Col>
                            </Row>
                            <Row className="task-desc">
                                <Card.Subtitle className="task-subtitle">
                                    <strong>
                                        <u>Task Description</u>
                                    </strong>
                                </Card.Subtitle>
                                <Card.Text className="task-description">
                                    This is a description of the task
                                    <p>
                                        <i>Special Instructions:</i>
                                    </p>
                                    These are instructions
                                </Card.Text>
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

                    <Card className="hide-desc task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="image-placeholder"></Col>
                                <Col className="card-titles">
                                    <Card.Title className="task-title">Name</Card.Title>
                                    <Card.Subtitle className="task-date">Zipcode</Card.Subtitle>
                                </Col>
                            </Row>
                            <Row className="task-desc">
                                <Card.Subtitle className="task-subtitle">
                                    <strong>
                                        <u>Task Description</u>
                                    </strong>
                                </Card.Subtitle>
                                <Card.Text className="task-description">
                                    This is a description of the task
                                    <p>
                                        <i>Special Instructions:</i>
                                    </p>
                                    These are instructions
                                </Card.Text>
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

                    <Card className="hide-desc task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="image-placeholder"></Col>
                                <Col className="card-titles">
                                    <Card.Title className="task-title">Name</Card.Title>
                                    <Card.Subtitle className="task-date">Zipcode</Card.Subtitle>
                                </Col>
                            </Row>
                            <Row className="task-desc">
                                <Card.Subtitle className="task-subtitle">
                                    <strong>
                                        <u>Task Description</u>
                                    </strong>
                                </Card.Subtitle>
                                <Card.Text className="task-description">
                                    This is a description of the task
                                    <p>
                                        <i>Special Instructions:</i>
                                    </p>
                                    These are instructions
                                </Card.Text>
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

                    {(user.claimed_tasks || []).map((claimTasks) => {
                        <PostedTasks element={claimTasks} />;
                    })}
                </Col>

                <Row className="created-tasks">
                    <h2>Created tasks</h2>
                    <Card className="task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="created-desc col-9">
                                    <Row>
                                        <Card.Title className="task-title">Name</Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Text className="task-subtitle">
                                            <strong>
                                                <u>Task Description: </u>
                                            </strong>
                                        </Card.Text>
                                        <Card.Text className="task-description">
                                            This is a description of the task
                                            <p>
                                                <i>Special Instructions:</i>
                                            </p>
                                            These are instructions
                                        </Card.Text>
                                    </Row>
                                </Col>
                                <Col className="claimed-col col-3">
                                    <Row>
                                        <Card.Title>Status:</Card.Title>
                                    </Row>
                                    <Col>Taken</Col>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="created-desc col-9">
                                    <Row>
                                        <Card.Title className="task-title">Name</Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Text className="task-subtitle">
                                            <strong>
                                                <u>Task Description: </u>
                                            </strong>
                                        </Card.Text>
                                        <Card.Text className="task-description">
                                            This is a description of the task
                                            <p>
                                                <i>Special Instructions:</i>
                                            </p>
                                            These are instructions
                                        </Card.Text>
                                    </Row>
                                </Col>
                                <Col className="claimed-col col-3">
                                    <Row>
                                        <Card.Title>Status:</Card.Title>
                                    </Row>
                                    <Col>Taken</Col>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="task-cards" onClick={Toggle}>
                        <Card.Body>
                            <Row>
                                <Col className="created-desc col-9">
                                    <Row>
                                        <Card.Title className="task-title">Name</Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Text className="task-subtitle">
                                            <strong>
                                                <u>Task Description: </u>
                                            </strong>
                                        </Card.Text>
                                        <Card.Text className="task-description">
                                            This is a description of the task
                                            <p>
                                                <i>Special Instructions:</i>
                                            </p>
                                            These are instructions
                                        </Card.Text>
                                    </Row>
                                </Col>
                                <Col className="claimed-col col-3">
                                    <Row>
                                        <Card.Title>Status:</Card.Title>
                                    </Row>
                                    <Col>Taken</Col>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {(user.posted_tasks || []).map((postedTasks) => {
                        <PostedTasks element={postedTasks} />;
                    })}
                </Row>
            </Row>
            {!userParam && (
                <Container id="add-a-task" className="add-task-container">
                    <Row className="p-3 border">
                        <TaskForm />
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Profile;
