import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import useApplicationData from "./hooks/useApplicationData";
import "./App.css";
import { SET_USERS } from "./reducers/dataReducer";

// Bootstrap imports & style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

//===========Components=============
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import MainPage from "./components/Main/Index";
import UserShelf from "./components/BookShelf/Index";
import Social from "./components/Social/Index";
import ClubsIndex from "./components/Club/Index";
import Register from "./components/Register";

function App() {
  const { state, dispatch } = useApplicationData();

  // Boilerplate users
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
              <Nav />
            </span>
          </nav>
          <Switch>
            <Route path="/clubs" component={ClubsIndex} />
            <Route path="/shelf" component={UserShelf} />
            <Route path="/social" component={Social} />
            <Route path="/register" component={Register} />
            <Route path="/" component={MainPage} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
