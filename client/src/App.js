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
  const [user, setUser] = useState({ id: 1 });
  const [userBooks, setUserBooks] = useState([]);
  // const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [news, setNews] = useState("");
  const [userBookData, setUserBookData] = useState({});
  const [club, setClub] = useState({});
  const [clubAdmin, setClubAdmin] = useState("");
  const [currBook, setCurrBook] = useState({ id: "initial" });
  const [cBooks, setCBooks] = useState([]);



  const initialize = () => {
    //Need PROMISE.ALL for the initial request...
    //Carousel 1
    axios.get(`/api/books/category/movie`).then((res) => { setCBooks(res.data); });
    //GET FRIENDS
    axios.get(`/api/users/${user.id}/friends`).then((res) => { setFriends(res.data); });
    // GET BOOKS
    axios.get(`/api/users/${user.id}/books`).then((res) => {
      console.log("RES FOR USER BOOKS", res.data)


      const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            [item[key]]: item,
          };
        }, initialValue);
      };
      const newObj = convertArrayToObject(res.data, 'id')
      setUserBooks(newObj);
      // setUserBookData(res.data);
    });
    //Get Club Details
    axios.get(`/clubs/1`)
      .then((res) => { setClub(res.data); })
      .catch((e) => console.log(e));

    //
    setUserBookData({
      OL7353617M: {
        bookId: "OL7353617M",
        status: "READ",
        readDate: "1992-05-07",
        notes: "I liked this book, good read about ...",
        rating: 5,
        friendsWhoReadIt: ["uid100",],
      },
    });
    //add first name & last name to user id as an object
    setFriends(["uid100", "uid200"]);
    //id, post
    setNews(["News 1", "News 2"]);
    //userBookData


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
  };
  useEffect(() => {
    initialize();
  }, []);

  const everyState = {
    userBooks,
    user,
    friends,
    news,
    club,
    clubAdmin,
    currBook,
  };

  console.log(">>>>>>everyState", everyState);

  //==============Functions========

  const fetchBookDetails = (OLBookID) => {
    let book = {
      id: OLBookID,
      title: "",
      author: "",
      published: "",
      description: "",
      subjects: null,
      works: null,
      coverLink: `https://covers.openlibrary.org/b/olid/${OLBookID}-L.jpg`,
    };

    if (OLBookID) {
      //Fetch Book Details
      axios
        .get(`https://openlibrary.org/books/${OLBookID}.json`)
        .then((res) => {
          book = {
            ...book,
            title: res.data.title,
            published: res.data.publish_date,
            author: res.data.authors[0].key,
            works: res.data.works[0].key,
          };
        })
        .then(() => {
          //Fetch Works (Description / subjects)
          if (book.works) {
            axios
              .get(`https://openlibrary.org${book.works}.json`)
              .then((res) => {
                book.subjects = res.data.subjects;
                if (res.data.description) {
                  if (typeof res.data.description !== "string") {
                    book.description = res.data.description.value;
                  } else {
                    book.description = res.data.description;
                  }
                } else {
                  book.description = "No Description Found";
                }
              });
          }
        })
        .then(() => {
          //Fetch Author Name
          if (book.author) {
            axios
              .get(`https://openlibrary.org${book.author}.json`)
              .then((res) => {
                book.author = res.data.name;
                setCurrBook(book);
              });
          }
        })
        .catch((e) => console.log("Error: axios get book details ", e));
    }
  };

  const updateUserBooks = (bookData) => {
    console.log("Top func", bookData)
    //Build Book Object
    const newUserBooks = {
      ...userBooks,
      [bookData.id]: {
        id: bookData.id,
        title: bookData.title,
        author: bookData.author,
        subject: bookData.subject,
      }
    }
    setUserBooks(newUserBooks);
    //Send to DB
    axios
      .post(`/api/users/${user.id}/books`, newUserBooks)
      .then((res) => {
        // Need Saved MSg ELSE Error Message
        console.log("Book added to shelf!");
        //Update state w. latest copy

      })
      .catch((err) => console.log(err));
  };

  const newBook = function (bookData) {
    //New Appointment
    // const appointment = {
    //   ...state.appointments[id],
    //   interview: { ...interview }
    // };

    const newBook = {
      id: bookData.id,
      title: bookData.title,
      author: bookData.author,
      subject: bookData.subject
    }

    const newState = {
      ...userBooks,
      [bookData.id]: newBook
    }
    console.log("((((((((", newBook, newState, bookData)
    axios
      .post(`/api/users/${user.id}/books`, newBook)
      .then((res) => {
        // Need Saved MSg ELSE Error Message
        //Update state w. latest copy
        setUserBooks(newState)
        console.log("Book added to shelf!");
      })
      .catch((err) => console.log(err));

  }

  const saveBookDataToDB = () => {
    const dataToSend = userBooks[currBook.id]
    axios
      .put(`/api/users/${user.id}/books/${currBook.id}`, dataToSend)
      .then((res) => {
        console.log(`Book ${currBook.id} Data Updated`);
      })
      .catch((err) => console.log('Book Index, Save ERROR:', err));
  };

  //==============Watchers that update state =================================
  useEffect(() => {
    fetchBookDetails(currBook.id);
  }, [currBook.id]); //The book they are looking at (can be search or their own)

  // useEffect(() => {
  //   updateDBUserBooks(userBooks);
  // }, []);  // Array of their books
  // userBooks  watcher for userBooks is firing everytime that data is changed (since consolidated)

  //==================Rendering ======================================================
  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar user={user} setUser={setUser} />
            </span>
          </nav>
          <Switch>
            <Route path="/clubs">
              <ClubsIndex user={user} clubAdmin={clubAdmin} setClubAdmin={setClubAdmin} club={club} setClub={setClub} />
            </Route>
            <Route path="/register" render={() => { return <Register user={user} setUser={setUser} />; }} />
            <Route path="/social">
              {" "}
              <Social friends={friends} news={news} setFriends={setFriends} />{" "}
            </Route>
            <Route path="/shelf/">
              {" "}
              <UserShelf books={userBooks} setBooks={setUserBooks} setCurrBook={setCurrBook} />
            </Route>
            <Route path="/book/:id"
              //Route is not fully setup
              render={(props) => {
                // Strips the id from the full url
                const paramBookId = props.location.pathname.replace("/book/", "");
                console.log("PARAM", paramBookId);
                // setCurrBook(paramBookId)
                return (
                  <BookDetails currBook={currBook} userBookData={userBooks} setUserBookData={setUserBooks} saveToDB={saveBookDataToDB} />
                );
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

            <Route path="/" exact>
              <MainPage
                carouselTitle={"Trending Now"}
                setUserBooks={setUserBooks}
                carouselBooks={cBooks}
                newBook={newBook}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
