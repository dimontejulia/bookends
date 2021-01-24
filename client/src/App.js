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
  // const [userBooks, setUserBooks] = useState([]);
  // const [search, setSearch] = useState("");
  // const [friends, setFriends] = useState([]);
  // const [wishlist, setWishlist] = useState([]);
  // const [news, setNews] = useState([]);
  // const [userData, setUserData] = useState({});
  // const [club, setClub] = useState([]);
  // const [clubAdmin, setClubAdmin] = useState("");
  // const [currBook, setCurrBook] = useState({ id: "initial" });
  // const [cBooks, setCBooks] = useState([]);
  // const [currClub, setCurrClub] = useState({});
  // const [clubNews, setClubNews] = useState();
  //for the toast
  // const [show, setShow] = useState({ item: null, status: false });

  // const convertArrayToObject = (array, key) => {
  //   const initialValue = {};
  //   return array.reduce((obj, item) => {
  //     return {
  //       ...obj,
  //       [item[key]]: item,
  //     };
  //   }, initialValue);
  // };

  const initialize = () => {
    //Need PROMISE.ALL for the initial request...
    // Promise.all([
    //   axios.get(`/api/books/category/movie`),
    //   axios.get(`/api/books/category/awardWinning`),
    //   axios.get(`/api/books/category/biography`),
    //   axios.get(`/api/books/category/dystopian`),
    // ]).then(([movie, awardWinning, bios, dystopian]) => {
    //   setCBooks({
    //     movies: { books: movie.data, catTitle: "It Was a Book First..." },
    //     awardWinning: { books: awardWinning.data, catTitle: "Award Winning" },
    //     bios: { books: bios.data, catTitle: "Biographies" },
    //     dystopian: { books: dystopian.data, catTitle: "Dystopian" },
    //   });
    // });

    //GET FRIENDS
    // axios.get(`/api/users/${user.id}/friends`).then((res) => {
    //   setFriends(res.data);
    // });
    // GET BOOKS
    // axios.get(`/api/users/${user.id}/books`).then((res) => {
    //   const newObj = convertArrayToObject(res.data, "id");
    //   setUserBooks(newObj);
    //   // setUserBookData(res.data);
    // });

    // GET WISHLIST
    // axios.get(`/api/users/${user.id}/wishlist`).then((res) => {
    //   setWishlist(res.data);
    // });

    //GET USERS CLUBS
    // axios
    //   .get(`/api/users/${user.id}/clubs`)
    //   .then((res) => {
    //     const newObj = convertArrayToObject(res.data, "id");
    //     setClub(newObj);
    //   })
    //   .catch((e) => console.log(e));

    // GET POSTS
    // axios
    //   .get(`/api/users/${user.id}/posts`)
    //   .then((res) => {
    //     setNews(res.data);
    //   })
    //   .catch((e) => console.log(e));

    // setClubAdmin({
    //   user,
    // });
  };
  useEffect(() => {
    initialize();
  }, []);


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

  // const updateUserBooks = (bookData) => {
  //   //Build Book Object
  //   const newUserBooks = {
  //     ...userBooks,
  //     [bookData.id]: {
  //       id: bookData.id,
  //       title: bookData.title,
  //       author: bookData.author,
  //       subject: bookData.subject,
  //       first_publish_year: bookData.first_publish_year,
  //     },
  //   };
  //   setUserBooks(newUserBooks);
  //   //Send to DB
  //   axios
  //     .post(`/api/users/${user.id}/books`, newUserBooks)
  //     .then((res) => {
  //       // Need Saved MSg ELSE Error Message
  //       console.log("Book added to shelf!");

  //       setShow({ item: "Book added to shelf.", status: true });
  //       //Update state w. latest copy
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const deleteUserBook = (bookId) => {
  //   const userId = user.id;
  //   axios
  //     .delete(`/api/users/${userId}/books/${bookId}`)
  //     .then((res) => {
  //       console.log("book removed from shelf!");
  //     })
  //     .catch((err) => err);
  // };

  // const addClub = (clubName, avatar) => {
  //   const newClubData = {
  //     userId: user.id,
  //     clubName,
  //     avatar,
  //   };

  //   axios
  //     .post(`/api/clubs/new`, newClubData)
  //     .then((res) => {
  //       console.log("RES DATA APP.JS ADD CLUB THEN >>>>", res.data);
  //       // setClub((prev) => [...prev, res.data]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const deleteClub = (clubId, clubName) => {
  //   console.log("start fo app.js delete", clubId, clubName);
  //   axios
  //     .delete(`/api/clubs/${clubId}`)
  //     .then((res) => {
  //       console.log("club has been removed!!!!", res);
  //     })
  //     .catch((err) => err);
  // };

  // const addFriend = (email) => {
  //   //Check against friends
  //   const friendExists = state.friends.some((friend) => friend.email === email);
  //   if (friendExists) {
  //     console.log("FRIEND EXIST");
  //     return "Friend Exists";
  //   }
  //   const dataToSend = { friendsEmail: email };
  //   axios.post(`/api/users/${user.id}/friends`, dataToSend).then((res) => {
  //     //SUCCESS? RX friend Details > Build new Friend List
  //     if (typeof res.data === "object") {
  //       setFriends((prev) => [...prev, res.data]);
  //       setShow({ item: "Friend added successfully.", status: true });
  //     }
  //     //FAIL ResJSON will send 'NO USER FOUND'
  //   });
  //   //
  // };

  // const mbrOfClub = (userId, clubId) => {
  //   //HELPER FUNC
  //   //Check if Mbr has that club Id already
  //   const usersClubs = Object.keys(state.clubs);
  //   return usersClubs.some((club) => club === clubId);
  // };

  // const joinClub = (clubId) => {
  //   //Combine 2 checks below into validate join club
  //   //Check if entry if a club ID (implement club Prefix)
  //   //Check if mbr already
  //   if (mbrOfClub(user.id, clubId)) {
  //     return setShow({
  //       item: "Whoops, you already belong to that club.",
  //       status: true,
  //     });
  //   }
  //   const dataToSend = { userId: user.id, clubId };
  //   axios
  //     .post(`/api/users/${user.id}/clubs`, dataToSend)
  //     .then((res) => {
  //       //Sueccess res will be obj
  //       if (typeof res.data === "string") {
  //         setShow({ item: res.data, status: true });
  //       } else if (typeof res.data === "object") {
  //         setClub(res.data);
  //         setShow({ item: "Successfully joined club", status: true });
  //       }
  //       //FAIL ResJSON will send 'NO USER FOUND'
  //     })
  //     .catch((e) => setShow({ item: "Error", status: true }));
  // };

  // const deleteFriend = (friendId) => {
  //   console.log("DEL FRIEND START", friendId);
  //   axios.delete(`/api/users/${user.id}/friends/${friendId}`).then((res) => {
  //     console.log(`DELETE FRIEND RES ${res.data}`);
  //     setFriends(res.data);
  //     setShow({ item: "Friend deleted successfully.", status: true });
  //   });
  // };

  // const newBook = (bookData) => {
  //   const newBook = {
  //     id: bookData.id,
  //     title: bookData.title,
  //     author: bookData.author,
  //     subject: bookData.subject,
  //     first_publish_year: bookData.first_publish_year,
  //   };

  //   const newState = {
  //     ...userBooks,
  //     [bookData.id]: newBook,
  //   };
  //   console.log("((((((((", newBook, newState, bookData);

  //   //This should be in the THEN of axios but getting 500 error cause Ukn
  //   // debug later...
  //   setUserBooks(newState);

  //   axios
  //     .post(`/api/users/${user.id}/books`, newBook)
  //     .then((res) => {
  //       console.log("Book added to shelf!");
  //       setShow({ item: "Book added to shelf!", status: true });
  //       // Need Saved MSg ELSE Error Message
  //       //Update state w. latest copy
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const saveBookDataToDB = () => {
  //   const dataToSend = userBooks[state.currBook.id];
  //   axios
  //     .put(`/api/users/${user.id}/books/${state.currBook.id}`, dataToSend)
  //     .then((res) => {
  //       console.log(`Book ${state.currBook.id} Data Updated`);
  //       setShow({ item: `Book ${state.currBook.id} Data Updated`, status: true });
  //     })
  //     .catch((err) => console.log("Book Index, Save ERROR:", err));
  // };

  // const postClubNews = (post) => {
  //   console.log("POST NEWS", post);
  //   //Add userInfo To Post
  //   const clubPost = {
  //     ...post,
  //     userId: user.id,
  //     firstname: user.firstName,
  //     lastname: user.lastName,
  //     clubId: state.currClub.id,
  //   };

  //   //Prepend to state
  //   const newClubPosts = [clubPost, ...clubNews];
  //   return axios.post(`/api/clubs/:id/newsfeed`, clubPost).then((res) => {
  //     console.log("POST RESPONSE:", res.data);
  //     //Update State
  //     setClubNews(newClubPosts);
  //   });
  // };

  // const updateClubInfo = (clubInfo, newBook) => {
  //   console.log("SETCLUBBOOK@@@@@@@@@", clubInfo, newBook);
  //   const newClubObj = clubInfo;
  //   const clubId = clubInfo.id;

  //   if (newBook !== null) {
  //     const newClubObj = { ...club[clubId], current_book: newBook.id };
  //   }
  //   const newState = {
  //     ...club,
  //     [clubId]: newClubObj,
  //   };
  //   const dataToSend = { newClubObj, newBook };
  //   // Pass newbook & the club,
  //   console.log("Update Club Book (Ax DATA SENT)", dataToSend);
  //   axios
  //     .put(`/api/clubs/${clubId}`, dataToSend)
  //     .then((res) => {
  //       console.log("Update Club (Ax RES)", res.data);
  //       setShow({
  //         item: `${newBook.title} assigned successfully to \n ${newClubObj.book_club_name}.`,
  //         status: true,
  //       });
  //       //Update State on success
  //       setClub(newState);
  //       setCurrClub(newClubObj);
  //     })
  //     .catch((err) => console.log(err));
  // };

  //==============Watchers that update state =================================
  useEffect(() => {
    fetchBookDetails(state.currBook.id);
  }, [state.currBook.id]); //The book they are looking at (can be search or their own)

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
                friends={state.friends}
                news={state.news}
                addFriend={addFriend}
                deleteFriend={deleteFriend}
                addClub={createClub}
                clubs={state.clubs}
                // setClub={setClub}
                setCurrClub={setCurrClub}
                setCurrBook={setCurrBook}
                currBook={state.currBook}
                // news={news}
                setNews={postNews}
                // setClubNews={setClubNews}
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
                    // saveToDB={saveBookDataToDB}
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
