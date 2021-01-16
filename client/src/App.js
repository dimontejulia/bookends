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
import Nav from "./components/Nav";
import MainPage from "./components/Main/Index";
import UserShelf from "./components/BookShelf/Index";
import Social from "./components/Social/Index";
import ClubsIndex from "./components/Club/Index";
import Register from "./components/Register";
import BookDetails from "./components/Book/Index";

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
            <Route path="/book/:id" render={(props) => {
              // Strips the id from the full url
              let bookID = props.location.pathname.replace('/book/', '');
              console.log("ROUTE>>Book id: ", bookID)
              return (
                <BookDetails />
              )
            }} />

            <Route path="/" component={MainPage} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
