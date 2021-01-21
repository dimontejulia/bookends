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
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
//============================================
function App() {
  const [user, setUser] = useState({ id: 1 });
  const [userBooks, setUserBooks] = useState([]);
  // const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [news, setNews] = useState([]);
  const [userData, setUserData] = useState({});
  const [club, setClub] = useState([]);
  const [clubAdmin, setClubAdmin] = useState("");
  const [currBook, setCurrBook] = useState({ id: "initial" });
  const [cBooks, setCBooks] = useState([]);
  const [currClub, setCurrClub] = useState({});

  const initialize = () => {
    //Need PROMISE.ALL for the initial request...
    Promise.all([
      axios.get(`/api/books/category/movie`),
      axios.get(`/api/books/category/awardWinning`),
      axios.get(`/api/books/category/biography`),
      axios.get(`/api/books/category/dystopian`),
    ]).then(([movie, awardWinning, bios, dystopian]) => {
      setCBooks({
        movies: { books: movie.data, catTitle: "It Was a Book First..." },
        awardWinning: { books: awardWinning.data, catTitle: "Award Winning" },
        bios: { books: bios.data, catTitle: "Biographies" },
        dystopian: { books: dystopian.data, catTitle: "Dystopian" },
      });
    });

    //GET FRIENDS
    axios.get(`/api/users/${user.id}/friends`).then((res) => {
      setFriends(res.data);
    });
    // GET BOOKS
    axios.get(`/api/users/${user.id}/books`).then((res) => {
      const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            [item[key]]: item,
          };
        }, initialValue);
      };
      const newObj = convertArrayToObject(res.data, "id");
      setUserBooks(newObj);
      // setUserBookData(res.data);
    });

    // GET WISHLIST
    axios.get(`/api/users/${user.id}/wishlist`).then((res) => {
      setWishlist(res.data);
    });

    //GET USERS CLUBS
    axios
      .get(`/api/users/${user.id}/clubs`)
      .then((res) => {
        // [ {},{}]
        setClub(res.data);
      })
      .catch((e) => console.log(e));

    // GET POSTS
    axios
      .get(`/api/users/${user.id}/posts`)
      .then((res) => {
        console.log("RES DATA", res.data);
        setNews(res.data);
      })
      .catch((e) => console.log(e));

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
    currClub,
  };

  console.log(">>>>>>everyState", cBooks);

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
    console.log("Top func", bookData);
    //Build Book Object
    const newUserBooks = {
      ...userBooks,
      [bookData.id]: {
        id: bookData.id,
        title: bookData.title,
        author: bookData.author,
        subject: bookData.subject,
      },
    };
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

  const deleteUserBook = (bookId) => {
    const userId = user.id;
    axios
      .delete(`/api/users/${userId}/books/${bookId}`)
      .then((res) => {
        console.log("book removed from shelf!");
      })
      .catch((err) => err);
  };

  const newBook = (bookData) => {
    const newBook = {
      id: bookData.id,
      title: bookData.title,
      author: bookData.author,
      subject: bookData.subject,
    };

    const newState = {
      ...userBooks,
      [bookData.id]: newBook,
    };
    console.log("((((((((", newBook, newState, bookData);

    //This should be in the THEN of axios but getting 500 error cause Ukn
    // debug later...
    setUserBooks(newState);

    axios
      .post(`/api/users/${user.id}/books`, newBook)
      .then((res) => {
        console.log("Book added to shelf!");
        // Need Saved MSg ELSE Error Message
        //Update state w. latest copy
      })
      .catch((err) => console.log(err));
  };

  const saveBookDataToDB = () => {
    const dataToSend = userBooks[currBook.id];
    axios
      .put(`/api/users/${user.id}/books/${currBook.id}`, dataToSend)
      .then((res) => {
        console.log(`Book ${currBook.id} Data Updated`);
      })
      .catch((err) => console.log("Book Index, Save ERROR:", err));
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
              <Navbar user={user} setUser={setUser} clubs={club} />
            </span>
          </nav>
          <Switch>
            <Route
              path="/clubs/:id"
              render={(props) => {
                const paramClubId = props.location.pathname.replace(
                  "/clubs/",
                  ""
                );
                return (
                  <ClubsIndex
                    clubId={paramClubId}
                    clubAdmin={clubAdmin}
                    setClubAdmin={setClubAdmin}
                    club={club}
                    setClub={setClub}
                    currClub={currClub}
                  />
                );
              }}
            />
            {/* <Route path="/clubs">
              <ClubsIndex
                user={user}
                clubAdmin={clubAdmin}
                setClubAdmin={setClubAdmin}
                club={club}
                setClub={setClub}
              />
            </Route> */}
            <Route
              path="/register"
              render={() => {
                return <Register user={user} setUser={setUser} />;
              }}
            />
            <Route path="/social">
              {" "}
              <Social
                user={user}
                friends={friends}
                news={news}
                setFriends={setFriends}
                clubs={club}
                setClub={setClub}
                setCurrClub={setCurrClub}
                news={news}
                setNews={setNews}
              />{" "}
            </Route>
            <Route path="/shelf/">
              {" "}
              <UserShelf
                books={userBooks}
                setBooks={setUserBooks}
                setCurrBook={setCurrBook}
              />
            </Route>
            <Route path="/wishlist/">
              {" "}
              <UserShelf
                books={wishlist}
                setBooks={setWishlist}
                setCurrBook={setCurrBook}
              />
            </Route>
            <Route
              path="/book/:id"
              //Route is not fully setup
              render={(props) => {
                // Strips the id from the full url
                const paramBookId = props.location.pathname.replace(
                  "/book/",
                  ""
                );
                console.log("PARAM", paramBookId);
                // setCurrBook(paramBookId)
                return (
                  <BookDetails
                    currBook={currBook}
                    userBookData={userBooks}
                    setUserBookData={setUserBooks}
                    saveToDB={saveBookDataToDB}
                    deleteUserBook={deleteUserBook}
                  />
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
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                    currBook={currBook}
                    setCurrBook={setCurrBook}
                    newBook={newBook}
                  />
                );
              }}
            />

            <Route path="/" exact>
              <MainPage
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
