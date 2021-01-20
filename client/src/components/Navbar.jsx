import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import axios from "axios";

import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar(props) {
  // const parsedList =
  //   clubIds && clubIds.map((club) => console.log(club.book_club_id));
  const userId = props.user.id;
  const clubIds = props.clubs;

  const loggedIn = function (id) {
    if (!id) {
      return (
        <div>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <Login user={props.user} setUser={props.setUser} />
        </div>
      );
    } else {
      return (
        <span>
          {`User: ${props.user.first_name}`}
          <Button variant="primary" type="submit">
            Logout
          </Button>
        </span>
      );
    }
  };

  const usersClubs = (clubId) => {
    axios
      .get(`/api/club/${clubId}`)
      .then((res) => {
        console.log("RESDATA /API/CLUBS/ID ->>>>", res.data);
      })
      .catch((err) => err);
  };

  const handleClubClick = (e) => {
    e.preventDefault();

    const clubIdList =
      clubIds &&
      clubIds.map((club) => {
        return <NavDropdown.Item>Club {club.book_club_id}</NavDropdown.Item>;
      });

    axios
      .get(`/api/users/${userId}/club`)
      .then((res) => {
        console.log("USERS/ID/CLUBS >>>>>>", res.data);
      })
      .catch((err) => console.log(err));
  };

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
          {/* <NavDropdown
            onClick={handleClubClick}
            title="Book Clubs"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
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
