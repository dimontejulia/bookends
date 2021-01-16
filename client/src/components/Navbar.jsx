import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Login from "./Login";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
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
            <Nav.Link>Nav</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shelf">
            <Nav.Link>My Shelf</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/social">
            <Nav.Link>Social</Nav.Link>
          </LinkContainer>
        </Nav>
        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
        <Login />
      </Navbar.Collapse>
    </Navbar>
  );
}
