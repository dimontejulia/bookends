import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import useApplicationData from "./hooks/useApplicationData";

// Bootstrap imports & style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

//===========Components Import =============
import Navbar from "./components/Navbar";
import MainPage from "./components/Main/Index";
import UserShelf from "./components/BookShelf/Index";
import Social from "./components/Social/Index";
import ClubsIndex from "./components/Club/Index";
import Register from "./components/Register";
import BookDetails from "./components/Book/Index";
import SearchIndex from "./components/Search/SearchIndex";
//============================================
function App() {
  const [user, setUser] = useState({});
  const [userBooks, setUserBooks] = useState("");
  // const [search, setSearch] = useState("");
  const [friends, setFriends] = useState("");
  const [news, setNews] = useState("");
  const [userData, setUserData] = useState("");
  const [club, setClub] = useState("");
  const [clubAdmin, setClubAdmin] = useState("");
  const [currBook, setCurrBook] = useState({ id: 'initial' });

  const initialize = () => {
    setUser({ id: "", firstName: "" });
    // setUserBooks(["OL365902M", "OL26455544M", "OL24222441M"]); //org... id only
    setUserBooks([
      { id: "OL365902M", title: 'Rainbow Six', author: 'Tom Clancy' },
      { id: "OL26455544M", title: 'Dangerous Lies', author: 'B Fitz' },
      { id: "OL26455544M", title: 'Dangerous Lies', author: 'B Fitz' },
      { id: "OL26455544M", title: 'Dangerous Lies', author: 'B Fitz' },
      { id: "OL26455544M", title: 'Dangerous Lies', author: 'B Fitz' },
      { id: "OL365902M", title: 'Rainbow Six', author: 'Tom Clancy' },
      { id: "OL365902M", title: 'Rainbow Six', author: 'Tom Clancy' },
      { id: "OL365902M", title: 'Rainbow Six', author: 'Tom Clancy' },
      { id: "OL365902M", title: 'Rainbow Six', author: 'Tom Clancy' },
      { id: "OL24222441M", title: 'Trojan Odyssey', author: 'C Cussler' },
    ]);
    setFriends(["uid100", "uid200"]);
    setNews(["News 1", "News 2"]);
    setUserData({
      status: "READ | Reading | On list?",
      readDate: "2019-05-07",
      notes: "These are my notes on this book... I like books",
      rating: 0,
      friendsWhoReadIt: ["Abby", "Carl", "Linda"],
    });
    setClub({
      name: "John's Club",
      avatar: "https://image.flaticon.com/icons/png/512/69/69589.png",
      description: "Basic book club description goes here",
      currentBook: {
        cover:
          "https://dynamic.indigoimages.ca/books/0735211299.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
        title: "Atomic Habits",
        author: "James Clear",
        published: "October 16, 2018",
        description:
          "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      },
    });
    setClubAdmin({
      user,
    });
    // setCurrBook({ ...currBook, id: '1' })
  }
  //OL365902M  Rainbow Six
  useEffect(() => { initialize() }, [])

  const everyState = {
    userBooks,
    user,
    friends,
    news,
    club,
    clubAdmin,
    currBook
  };

  console.log(">>>>>>everyState", everyState);

  //==============Functions========

  const fetchBookDetails = (OLBookID) => {
    let book = {
      id: OLBookID,
      title: '',
      author: '',
      published: '',
      description: '',
      subjects: null,
      works: null,
      coverLink: `https://covers.openlibrary.org/b/olid/${OLBookID}-L.jpg`,
    }
    if (OLBookID) {
      //Fetch Book Details
      axios.get(`https://openlibrary.org/books/${OLBookID}.json`)
        .then((res) => {
          book = {
            ...book,
            title: res.data.title,
            published: res.data.publish_date,
            author: res.data.authors[0].key,
            works: res.data.works[0].key
          }
        })
        .then(() => {
          //Fetch Works (Description / subjects)
          if (book.works) {
            axios.get(`https://openlibrary.org${book.works}.json`)
              .then((res) => {
                book.subjects = res.data.subjects
                const descType = typeof res.data.description
                console.log("RES DESC>>>>", res.data)
                if (res.data.description) {
                  if (descType !== 'string') {
                    book.description = res.data.description.value
                  } else {
                    book.description = res.data.description
                  }
                } else {
                  book.description = "No Description Found"
                }


              })
          }
        })
        .then(() => {
          //Fetch Author Name
          if (book.author) {
            axios.get(`https://openlibrary.org${book.author}.json`)
              .then((res) => {
                book.author = res.data.name
                setCurrBook(book)
              })
          }
        })
        .catch(e => console.log("Error: axios get book details ", e))
    }
  };
  //Watch for currBook to change and load Details into state
  useEffect(() => {
    console.log("useEffect for Details")
    fetchBookDetails(currBook.id)
  }, [currBook.id])


  //==================Rendering =============
  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar user={user} />
            </span>
          </nav>
          <Switch>
            <Route path="/clubs"><ClubsIndex user={user} clubAdmin={clubAdmin} setClubAdmin={setClubAdmin} club={club} setClub={setClub} /></Route>
            <Route path="/register" render={() => { return <Register user={user} setUser={setUser} />; }} />
            <Route path="/social">{" "}<Social friends={friends} news={news} setFriends={setFriends} />{" "}</Route>
            <Route path="/shelf/">{" "}<UserShelf books={userBooks} setBooks={setUserBooks} setCurrBook={setCurrBook} /></Route>
            <Route
              path="/book/:id"
              //Route is not fully setup
              render={(props) => {
                // Strips the id from the full url
                const paramBookId = props.location.pathname.replace("/book/", "");
                console.log("PARAM", paramBookId)
                // setCurrBook(paramBookId)
                return <BookDetails currBook={currBook} userBookData={userData} />;
              }}
            />
            <Route
              path="/search"
              //Route is not fully setup
              render={(props) => {
                return (
                  <SearchIndex
                    userBooks={userBooks}
                    setUserBooks={setUserBooks}
                    currBook={currBook}
                    setCurrBook={setCurrBook}
                  />
                );
              }}
            />

            <Route path="/" exact><MainPage /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
