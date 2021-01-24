import React, { useEffect, useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

//===========Components Import =============
import Navbar from "./components/Navbar";
import MainPage from "./components/Main/Index";
import UserShelf from "./components/BookShelf/Index";
import Social from "./components/Social/Index";
import ClubsInfo from "./components/Club/ClubInfo";
import Register from "./components/Register";
import BookDetails from "./components/Book/Index";
import SearchIndex from "./components/Search/SearchIndex";
import Confirmation from "./components/Confirmation";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import NewsFeed from "./components/Social/NewsFeed";
//============================================
function App() {

  const {
    state,
    show,
    setClubNews,
    setShow,
    setWishlist,
    setCurrBook,
    setCurrClub,
    addFriend,
    deleteFriend,
    addBookToShelf,
    rmvBookFrShelf,
    joinClub,
    createClub,
    deleteClub,
    updateClubInfo,
    postNews,
    postClubNews,
  } = useApplicationData()

  console.log("MEGA STATE App import", state)

  const [user, setUser] = useState({
    id: 1,
    firstName: "Mark",
    lastName: "Twain",
  });


  //==============Functions========

  const fetchBookDetails = (OLBookID) => {
    if (OLBookID === "initial") {
      return null;
    }
    let book = {
      id: OLBookID,
      title: "",
      author: "",
      published: "",
      description: "",
      first_publish_year: "",
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
            first_publish_year: res.data.first_publish_year,
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


  //==============Watchers that update state =================================
  useEffect(() => {
    fetchBookDetails(state.currBook.id);
  }, [state.currBook.id]); //The book they are looking at (can be search or their own)

  //==================Rendering ======================================================
  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar user={user} setUser={setUser} clubs={state.clubs} />
              {/* <Confirmation
                className="confirmation__toast"
                show={show}
                setShow={setShow}
              /> */}
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
                  <ClubsInfo
                    clubId={paramClubId}
                    // clubAdmin={clubAdmin}
                    // setClubAdmin={setClubAdmin}
                    club={state.clubs}
                    // setClub={setClub}
                    currClub={state.currClub}
                    currBook={state.currBook}
                    user={user}
                    deleteClub={deleteClub}
                    editClub={updateClubInfo}
                    clubNews={state.clubNews}
                    postClubNews={postClubNews}
                  />
                );
              }}
            />

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
                friends={state.friends}
                news={state.news}
                addFriend={addFriend}
                deleteFriend={deleteFriend}
                addClub={createClub}
                clubs={state.clubs}
                setCurrClub={setCurrClub}
                setCurrBook={setCurrBook}
                currBook={state.currBook}
                setNews={postNews}
                setClubNews={setClubNews}
                joinClub={joinClub}
              />{" "}
            </Route>
            <Route path="/shelf/">
              {" "}
              <UserShelf
                books={state.books}
                setBooks={addBookToShelf}
                setCurrBook={setCurrBook}
              />
            </Route>
            <Route path="/wishlist/">
              {" "}
              <UserShelf
                books={state.wishlist}
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
                    currBook={state.currBook}
                    userBookData={state.books}
                    setUserBookData={addBookToShelf}
                    deleteUserBook={rmvBookFrShelf}
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
                    userBooks={state.books}
                    setUserBooks={addBookToShelf}
                    wishlist={state.wishlist}
                    setWishlist={setWishlist}
                    currBook={state.currBook}
                    setCurrBook={setCurrBook}
                    setClubBook={updateClubInfo}
                    newBook={addBookToShelf}
                    show={show}
                    setShow={setShow}
                    clubs={state.clubs}
                  />
                );
              }}
            />

            <Route path="/" exact>
              <MainPage
                setUserBooks={addBookToShelf}
                carouselBooks={state.carouselBooks}
                newBook={addBookToShelf}
                show={show}
                setShow={setShow}
                setClubBook={updateClubInfo}
                clubs={state.clubs}
                user={user}
                setNews={postNews}
                news={state.news}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
