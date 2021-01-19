import React from "react";
import Logo from "./Logo";
import Login from "./Login";

import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar(props) {
  const userId = props.user.id;

  const loggedIn = function (id){
    if (!id){
      return (
        <div>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <Login user={props.user} setUser={props.setUser}/>   
        </div> 
      )
    } else {
     return  (
        <span>
          {`User: ${props.user.first_name}`}
          <Button variant="primary" type="submit">
            Logout
          </Button>
        </span>
     )
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shelf">
            <Nav.Link>My Shelf</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/social">
            <Nav.Link>Social</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/clubs">
            <Nav.Link>Clubs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>
              <Button variant="outline-info">Search Books</Button>{" "}
            </Nav.Link>
          </LinkContainer>
        </Nav>
        {loggedIn(userId)}
        
      </Navbar.Collapse>
    </Navbar>
  );
}
