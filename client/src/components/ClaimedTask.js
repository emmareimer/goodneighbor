import React, { useState } from 'react';
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
import { Link } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const ClaimedTasks = (element) => {
    const [tasks, setTasks] = useState("");

    return (
        <>
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

                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}


export default ClaimedTasks;