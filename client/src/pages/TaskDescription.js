import React from "react";
// import { useMutation } from "@apollo/react-hooks";
// import { EDIT_CLAIMED_TASK, UPDATE_TASK } from "../utils/mutations";
// import Auth from "../utils/auth";
import { Card, Button, Container } from "react-bootstrap";

const TaskDescription = () => {
    return (
<div className="container-center-horizontal">
    <div className="content">
        <div className="frame screen">
        <Container>
            <Card>
                <img id="plant-card-sign"
                    src="https://via.placeholder.com/150x30"
                    alt="green plant icon"/>
                <Card.Title> {/*TASK.NAME*/}Water the plants</Card.Title>
                <Card.Subtitle>Zip Code: {/*PROFILE.ZIP */} </Card.Subtitle>
                <Card.Body>
                    <div className="form-label">Task description:</div>
                    <div className="form-input">{/* TASK.DESCRIPTION */}</div>
                    <div className="form-label">Special instructions:</div>
                    <div className="form-input">{/* TASK.INSTRUCTION */}</div>
                </Card.Body>
                <Card.Footer>
                <div className="button-center">
                    <Button className="submit-button1"><span className="button-text-1">Claim this task</span></Button>
                </div>
                <div className="button-center">
                    <Button className="submit-button2"><span className="button-text-2">Go Back to Search</span></Button>
                </div>
                </Card.Footer>
            </Card>
        </Container>
        </div>
    </div>
 </div>
    )
}
export default TaskDescription;