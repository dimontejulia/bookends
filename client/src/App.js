import React, { useEffect, useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import cvtArrayToObj from "./helpers/helpers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

//===========Components Import =============
import Wave from "./components/Wave";
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
    saveBookNotes,
    joinClub,
    createClub,
    deleteClub,
    updateClubInfo,
    postNews,
    postClubNews,
  } = useApplicationData();

  console.log("MEGA STATE App import", state);

  const [user, setUser] = useState({
    id: 1,
    firstName: "Mark",
    lastName: "Twain",
  });

  const getUserNames = (id) => {
    const friends = state.friends;
    console.log("friends state", friends);
    for (let friend of friends) {
      if (friend.userid === id) {
        return `${friend.firstname}  ${friend.lastname}`;
      }
    }
  };

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
      friends_read: null,
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
          axios.get(`/api/books/${OLBookID}`).then((res) => {
            const friendNames = res.data.map((x) => getUserNames(x.user_id));
            book.friends_read = friendNames;
          });
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
  function renderClubInfo(clubId) {
    if (!clubId) {
      return;
    }
    return (
      <ClubsInfo
        state={state}
        clubId={clubId}
        clubNews={state.clubNews}
        currClub={state.currClub}
        currBook={state.currBook}
        user={user}
        deleteClub={deleteClub}
        editClub={updateClubInfo}
        postClubNews={postClubNews}
      />
    );
  }

  let currentClub = function (id) {
    // setCurrClub(id)
    return (<ClubsInfo
      state={state}
      clubId={id}
      clubNews={state.clubNews}
      currClub={state.currClub}
      currBook={state.currBook}
      user={user}
      deleteClub={deleteClub}
      editClub={updateClubInfo}
      postClubNews={postClubNews}
    />
    )
  }

  //==================Rendering ======================================================
  return (
    <Router>
      <div className="App">
        <main>
          <nav className="sidebar__menu">
            <span>
              <Navbar user={user} setUser={setUser} clubs={state.clubs} />
              <Confirmation
                className="confirmation__toast"
                show={show}
                setShow={setShow}
              />
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
                // setCurrClub()
                { console.log("adsfasdfa", paramClubId) }
                return (
                  <ClubsInfo
                    state={state}
                    paramId={paramClubId}
                    clubNews={state.clubNews}
                    currClub={state.currClub}
                    currBook={state.currBook}
                    user={user}
                    deleteClub={deleteClub}
                    editClub={updateClubInfo}
                    postClubNews={postClubNews}
                    setCurrClub={setCurrClub}
                  />
                );
                // renderClubInfo(state.currClub.id);
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
                state={state}
                user={user}
                // friends={state.friends}
                // news={state.news}
                // currBook={state.currBook}
                // clubs={state.clubs}
                addFriend={addFriend}
                deleteFriend={deleteFriend}
                addClub={createClub}
                setCurrClub={setCurrClub}
                setCurrBook={setCurrBook}
                setNews={postNews}
                setClubNews={setClubNews}
                joinClub={joinClub}
                show={show}
                setShow={setShow}
              />{" "}
            </Route>
            <Route path="/shelf/">
              {" "}
              <UserShelf
                books={state.books}
                wishlist={state.wishlist}
                setBooks={addBookToShelf}
                setWishlist={setWishlist}
                setCurrBook={setCurrBook}
              />
            </Route>
            {/* <Route path="/wishlist/">
              {" "}
              <UserShelf
                books={state.wishlist}
                setBooks={setWishlist}
                setCurrBook={setCurrBook}
              />
            </Route> */}
            <Route
              path="/book/:id"
              //Route is not fully setup
              render={(props) => {
                // Strips the id from the full url
                const paramBookId = props.location.pathname.replace(
                  "/book/",
                  ""
                );
                // setCurrBook(paramBookId)
                return (
                  <BookDetails
                    state={state}
                    paramId={paramBookId}
                    setCurrBook={setCurrBook}
                    // currBook={state.currBook}
                    // userBookData={state.books}
                    addBookToShelf={addBookToShelf}
                    saveBookNotes={saveBookNotes}
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
