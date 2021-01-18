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
  const [user, setUser] = useState('');
  const [books, setBooks] = useState('');
  // const [search, setSearch] = useState("");
  const [friends, setFriends] = useState('');
  const [news, setNews] = useState('');
  const [userData, setUserData] = useState('');

  const initialize = () => {
    setUser('2131')
    setBooks(['State Books', 'OL25428864M', 'OL15501024M', 'OL4424220M'])
    setFriends(['Joe', 'Sara'])
    setNews(['News 1', 'News 2'])
    setUserData({
      status: 'read',
      readDate: '2019-05-07',
      notes: "These are book notes"
    })
  }

  useEffect(() => { initialize() }, [])

  const everyState = {
    books,
    user,
    friends,
    news
  }

  console.log(">>>>>>BOOKS", books)
  console.log(">>>>>>everyState", everyState)
  const testArray = 'OL362125M'
  const newsList = ['News 1', 'News 2', 'News 3'];
  const friendList = ['Joe', 'Sara', 'Beth'];
  const testData = {
    status: 'read',
    readDate: '2019-05-07',
    notes: "These are book notes"
  };

  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar userName={user} />
            </span>
          </nav>
          <Switch>
            <Route path="/clubs" component={ClubsIndex} />
            <Route path="/register" render={() => { return <Register user={user} setUser={setUser} /> }} />
            {/* <Route path="/register" > <Register user={user} setUser={setUser} /> </Route> */}
            <Route path="/social"> <Social friends={friends} news={news} setFriends={setFriends} /> </Route>
            <Route path="/shelf/"> <UserShelf books={books} setBooks={setBooks} /></Route>
            <Route
              path="/book/:id"
              //Route is not fully setup 
              render={(props) => {
                // Strips the id from the full url
                let bookID = props.location.pathname.replace("/book/", "");
                return <BookDetails bookID={bookID} userBookData={userData} />;
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
