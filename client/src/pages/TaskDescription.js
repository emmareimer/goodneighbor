import React, { useState } from "react";
// import { useMutation } from "@apollo/react-hooks";
// import { EDIT_CLAIMED_TASK, UPDATE_TASK } from "../utils/mutations";
import Auth from "../utils/auth";
import { Card, Form, FormCheck, Button, Container } from "react-bootstrap";

const TaskDescription = () => {
    return (
        <Container>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body></Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </Container>
    )
}
export default TaskDescription;