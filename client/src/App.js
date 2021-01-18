import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import useApplicationData from './hooks/useApplicationData'

// Bootstrap imports & style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

//===========Nav Components=============
import Navbar from "./components/Navbar";
//===========Main Page=============
import MainPage from "./components/Main/Index";
import UserShelf from "./components/BookShelf/Index";
import Social from "./components/Social/Index";
import ClubsIndex from "./components/Club/Index";
import Register from "./components/Register";
import BookDetails from "./components/Book/Index";

function App() {
  const [state, setState] = useState();
  const [user, setUser] = useState("");
  const [book, setBook] = useState("");
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState("");
  const testCall = () => {
    setState("This is state")
  }
  useEffect(() => { testCall() }, [])


  // state = "Another Test"
  console.log(">>>>>>>>>STATE>>>>>>>", state)
  console.log(">>>>>>>>>STATE USER>>>>>>>", user)
  let myTest = user.userID
  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar test={'testNav'} />
            </span>
          </nav>
          <Switch>
            <Route path="/clubs" component={ClubsIndex} />
            <Route path="/shelf" component={UserShelf} />
            <Route path="/social" render={() => { return <Social test={myTest} /> }} />
            <Route path="/register" render={() => { return <Register user={user} setUser={setUser} /> }} />
            <Route path="/myshelf/" render={() => { return <UserShelf test={'testShelf'} /> }} />
            <Route
              path="/book/:id"
              render={(props) => {
                //===============================ROUTE IS INCOMPLETE Not truely dynamic===========================
                // Strips the id from the full url
                let bookID = props.location.pathname.replace("/book/", "");
                console.log("ROUTE>>Book id: ", bookID);
                return <BookDetails />;
              }}
            />

            <Route path="/" component={MainPage} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
