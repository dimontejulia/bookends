import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import useApplicationData from "./hooks/useApplicationData";
import "./App.css";
import { SET_USERS } from "./reducers/dataReducer";

// Bootstrap imports & style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/Nav.scss";

//===========Nav Components=============
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
//===========Main Page=============
import MainPage from "./components/Main/Index";
//===========User Shelf Page=============
import UserShelf from "./components/BookShelf/Index";

function App() {
  const { state, dispatch } = useApplicationData();

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/users",
    })
      .then((result) => dispatch({ type: SET_USERS, users: result.data }))
      .catch((err) => console.log(err.message));
  }, []);
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}
    </li>
  ));

  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Logo />
              <Nav />
              <Menu />
            </span>
          </nav>
          <Switch>
            <Route path="/shelf" component={UserShelf} />
            <Route path="/" component={MainPage} exact />
          </Switch>
          {/* <MainPage /> */}
        </main>

        <h1> Users </h1>

        <ul> {userList} </ul>
      </div>
    </Router>
  );
}

export default App;
