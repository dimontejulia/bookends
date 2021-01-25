import React from "react";
import Login from "./Login";
import axios from "axios";
import "./Nav.scss";

import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar(props) {
  // const parsedList =
  //   clubIds && clubIds.map((club) => console.log(club.book_club_id));
  //const clubIds = props.clubs;
  const userId = props.user.id;

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
          {`What are you reading ${props.user.firstName}?`}
          <Button className="nav__logout" variant="primary" type="submit">
            Logout
          </Button>
        </span>
      );
    }
  };

  // const usersClubs = (clubId) => {
  //   axios
  //     .get(`/api/club/${clubId}`)
  //     .then((res) => {
  //       console.log("RESDATA /API/CLUBS/ID ->>>>", res.data);
  //     })
  //     .catch((err) => err);
  // };

  return (
    <Navbar className="main__navbar" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          {/* <Logo /> */}
          bookends
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-link-items">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/social">
            <Nav.Link>Social</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shelf">
            <Nav.Link>Book Shelf</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>
              <Button className="nav__search" variant="outline-info">
                Search Books
              </Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        {loggedIn(userId)}
      </Navbar.Collapse>
    </Navbar>
  );
}
