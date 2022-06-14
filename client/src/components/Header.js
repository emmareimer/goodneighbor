import Auth from "../utils/auth";
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../index.css";
import "../App.css";
import gnLogo from "./goodneighbor.png";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar>
      {Auth.loggedIn() ? (
        <div className="header-nav">
          <div className="flex-row">
            <Navbar.Brand href="/">
              <img src={gnLogo} className="logo" alt="goodneighbor Logo" />
            </Navbar.Brand>
            <Nav className="links">
              <Link to="/profile#add-a-task" className="profile add-task-link">
                Add A Task
              </Link>
              <Link to="/profile" className="profile">
                Profile
              </Link>
              {/* <Nav.Link className="claimed-tasks">
                Claimed Tasks
              </Nav.Link>
              <Nav.Link className="completed-tasks">
                Completed Tasks
              </Nav.Link>
              <Nav.Link className="nearby-tasks">
                Tasks Near Me
              </Nav.Link> */}
              <Button className="green-button" onClick={logout}>
                Logout
              </Button>
            </Nav>
          </div>
          {/* <div className="divider"></div> */}
        </div>
      ) : (
        /* RIGHT NOW IT SAYS TO SHOW THE LOG OUT BUTTON IF THEY ARE NOT LOGGED IN?? WE SHOULD SHOW LOGIN AND SIGN UP W/ NO NAV LINKS */
        <div className="header-nav">
          <div className="flex-row">
            <Navbar.Brand href="/">
              <img src={gnLogo} className="logo" alt="goodneighbor Logo" />
            </Navbar.Brand>
            <div className="LoginSignUp">
              <Button className="green-button">
                {/* <span className="button-text-white"> Log in</span> */}
                <a href="/login" className="button-text-white">
                  {" "}
                  Log in{" "}
                </a>
              </Button>
              <Button className="white-button">
                {/* <span className="button-text-black"> Sign up</span> */}
                <a href="/signup" className="button-text-black">
                  {" "}
                  Sign up{" "}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
