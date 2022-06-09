import Auth from "../utils/auth"
import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap";
import "../index.css";
import "../App.css";

export default function Header() {
  return (
    <Navbar>
      {Auth.loggedIn() ? (
        <div className="header-nav">
          <div className="flex-row">
            <Navbar.Brand href="/">
              <img
                src="https://via.placeholder.com/150x30"
                className="logo"
                alt="goodneighbor Logo"
              />
            </Navbar.Brand>
            <Nav className="links">
              <Nav.Link to='/profile' className="profile">
                Profile
              </Nav.Link>
              <Nav.Link className="claimed-tasks">
                Claimed Tasks
              </Nav.Link>
              <Nav.Link className="completed-tasks">
                Completed Tasks
              </Nav.Link>
              <Nav.Link className="nearby-tasks">
                Tasks Near Me
              </Nav.Link>
            </Nav>
            <Button className="green-button">
              Log Out
            </Button>
          </div>
          {/* <div className="divider"></div> */}
        </div>
      ) : (
        /* RIGHT NOW IT SAYS TO SHOW THE LOG OUT BUTTON IF THEY ARE NOT LOGGED IN?? WE SHOULD SHOW LOGIN AND SIGN UP W/ NO NAV LINKS */
        <div className="header-nav">
          <div className="flex-row">
            <Navbar.Brand href="/">
              <img
                src="https://via.placeholder.com/150x30"
                className="logo"
                alt="goodneighbor Logo"
              />
            </Navbar.Brand>
            <div className="LoginSignUp">
              <Button className="green-button">
                {/* <span className="button-text-white"> Log in</span> */}
                <a href="/login" class="button-text-white"> Log in </a>
              </Button>
              <Button className="white-button">
                {/* <span className="button-text-black"> Sign up</span> */}
                <a href="/signup" class="button-text-black"> Sign up </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
}
