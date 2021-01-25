import { useState, useEffect } from "react";
import axios from "axios";
import cvtArrayToObj from "../helpers/helpers";

export default function useApplicationData() {
  const [show, setShow] = useState({ item: null, status: false });
  const [state, setState] = useState({
    user: {
      id: 1,
      firstName: "Mark",
      lastName: "Twain",
    },
    books: {},
    wishList: [],
    friends: [],
    news: [],
    clubNews: [],
    clubs: {},
    carouselBooks: {},
    currBook: { id: "initial" },
    currClub: {},
  });

  // const API = "localhost:3005";
  let user = state.user;
  useEffect(() => {
    //==== Initialize State ============================

    Promise.all([
      axios.get(`/api/books/category/movie`),
      axios.get(`/api/books/category/awardWinning`),
      axios.get(`/api/books/category/biography`),
      axios.get(`/api/books/category/dystopian`),
    ])
      .then(([movie, awardWinning, bios, dystopian]) => {
        setState((prev) => {
          return {
            ...prev,
            carouselBooks: {
              movies: { books: movie.data, catTitle: "It Was a Book First..." },
              awardWinning: {
                books: awardWinning.data,
                catTitle: "Award Winning",
              },
              bios: { books: bios.data, catTitle: "Biographies" },
              dystopian: { books: dystopian.data, catTitle: "Dystopian" },
            },
          };
        });
      })
      .catch((e) => console.log("Carousel Initialization Error", e));

    Promise.all([
      //GET FRIENDS
      axios.get(`/api/users/${user.id}/books`),
      axios.get(`/api/users/${user.id}/wishlist`),
      axios.get(`/api/users/${user.id}/friends`),
      axios.get(`/api/users/${user.id}/clubs`),
      axios.get(`/api/users/${user.id}/posts`),
    ])
      .then(([rBooks, rWishlist, rFriends, rClubs, rPosts]) => {
        setState((prev) => {
          return {
            ...prev,
            books: cvtArrayToObj(rBooks.data, "id"),
            wishlist: rWishlist.data,
            friends: rFriends.data,
            clubs: cvtArrayToObj(rClubs.data, "id"),
            news: rPosts.data,
          };
        });
      })
      .catch((e) => console.log("Initialization Error", e));
  }, []);
  //Functions to be passed down as Props (Dealing with state);===================================
  //==State Setters==============================================
  const setWishlist = () => {
    console.log("Click");
  };
  const setCurrBook = (input) => {
    console.log("SET HIT", input)
    setState((prev) => {
      return { ...prev, currBook: input };
    });
  };
  const setCurrClub = (clubId) => {
    console.log("SET CURR CLUB, promises...", clubId);

    Promise.all([
      axios.get(`/api/clubs/${clubId}`),
      axios.get(`/api/clubs/${clubId}/newsfeed`),
      axios.get(`/api/clubs/${clubId}/history`),
      axios.get(`/api/clubs/${clubId}/members`),
    ])
      .then(([clubDetails, news, history, members]) => {
        console.log("MEMBR RTN", members.data);

        function coveryHistoryToArray(historyObj) {
          //HELPER convert history to array
          return historyObj.map((book) => `${book.title} by ${book.author}`);
        }
        //Fetch Club Details
        const currClubObj = {
          ...clubDetails.data,
          history: coveryHistoryToArray(history.data),
          members: members.data,
        };
        setState((prev) => {
          return { ...prev, currClub: currClubObj };
        });
        // //Set Current Book (for details)
        setCurrBook({ id: clubDetails.data.current_book });
        // //Set Club News
        setClubNews(news.data);
      })
      .catch((err) => err);
  };

  // const setBookNotes = (currId) => {
  //   const newBookObj = state.books.currId
  //   const newBookState = { ...state, book:}
  //   setState((prev) => {
  //     return { ...prev, books: input };
  //   });
  // };
  //==FRIENDS==============================================

  const addFriend = (email) => {
    //Check against friends
    const friendExists = state.friends.some((friend) => friend.email === email);
    if (friendExists) {
      console.log("FRIEND EXIST");
      return "Friend Exists";
    }
    const dataToSend = { friendsEmail: email };
    axios.post(`/api/users/${user.id}/friends`, dataToSend).then((res) => {
      if (typeof res.data === "object") {
        const newFriendState = { ...state.friends, [res.data.id]: res.data };
        setState((prev) => {
          return { ...prev, friends: newFriendState };
        });
        setShow({ item: "Friend added successfully.", status: true });
      } else {
        //FAIL ResJSON will send 'NO USER FOUND'
        console.log(`Response @addFriend: ${res.data}`);
        setShow({
          item: "Whoops, can't seem to find that one...",
          status: true,
        });
      }
    });
    //
  };

  const deleteFriend = (friendId) => {
    console.log("DEL FRIEND START", friendId);
    axios.delete(`/api/users/${user.id}/friends/${friendId}`).then((res) => {
      setState((prev) => {
        return { ...prev, friends: res.data };
      });
      setShow({ item: "Friend deleted successfully.", status: true });
    });
  };
  //==Books==============================================
  const addBookToShelf = (bookData) => {
    const newBook = {
      id: bookData.id,
      title: bookData.title,
      author: bookData.author,
      subject: bookData.subject,
      first_publish_year: bookData.first_publish_year,
    };
    const newBookState = {
      ...state.books,
      [bookData.id]: newBook,
    };
    //This should be in the THEN of axios but getting 500 error cause Ukn
    // debug later...
    setState((prev) => {
      return { ...prev, books: newBookState };
    });
    axios
      .post(`/api/users/${user.id}/books`, newBook)
      .then((res) => {
        console.log("Book added to shelf!");
        setShow({ item: "Book added to shelf!", status: true });
        // Need Saved MSg ELSE Error Message
        //Update state w. latest copy
      })
      .catch((err) => console.log(err));
  };

  const saveBookNotes = (updatedBook) => {
    console.log("DATA TO SENDBOOK", updatedBook);
    const newBookState = {
      ...state.books,
      [updatedBook.id]: updatedBook,
    };
    axios
      .put(`/api/users/${user.id}/books/${state.currBook.id}`, updatedBook)
      .then((res) => {
        console.log("SAVE", res);
        setState((prev) => {
          return { ...prev, books: newBookState };
        });
        setShow({
          item: `Book ${updatedBook.title} Notes Updated`,
          status: true,
        });
      })
      .catch((err) => console.log("Book Index, Save ERROR:", err));
  };

  const rmvBookFrShelf = (bookId) => {
    const userId = user.id;
    console.log("RMB FR SHELF", bookId, user.id)
    axios
      .delete(`/api/users/${userId}/books/${bookId}`)
      .then((res) => {
        console.log("book removed from shelf!", res.data);
        setState((prev) => {
          return { ...prev, books: res.data };
        });
        setShow({ item: "Book removed successfully.", status: true });
      })
      .catch((err) => err);
  };
  //==Club ==============================================

  const mbrOfClub = (userId, clubId) => {
    //HELPER FUNC
    //Check if Mbr has that club Id already
    const usersClubs = Object.keys(state.clubs);
    return usersClubs.some((club) => club === clubId);
  };

  const joinClub = (clubId) => {
    //Combine 2 checks below into validate join club
    //Check if entry if a club ID (implement club Prefix)
    //Check if mbr already
    if (mbrOfClub(user.id, clubId)) {
      return setShow({
        item: "Whoops, you already belong to that club.",
        status: true,
      });
    }
    const dataToSend = { userId: user.id, clubId };
    axios
      .post(`/api/users/${user.id}/clubs`, dataToSend)
      .then((res) => {
        if (typeof res.data === "string") {
          //FAIL ResJSON will send 'NO USER FOUND'
          setShow({ item: res.data, status: true });
        } else if (typeof res.data === "object") {
          //Success res will be obj
          setState((prev) => {
            return { ...prev, clubs: res.data };
          });
          setShow({ item: "Successfully joined club", status: true });
        }
      })
      .catch((e) => setShow({ item: "Error", status: true }));
  };

  const createClub = (clubName, avatar) => {
    const newClubData = {
      userId: user.id,
      clubName,
      avatar,
    };
    axios
      .post(`/api/clubs/new`, newClubData)
      .then((res) => {
        console.log("RES DATA APP.JS ADD CLUB THEN >>>>", res.data);
        const newClubsState = { ...state.clubs, [res.data.id]: res.data };
        setState((prev) => {
          return { ...prev, clubs: newClubsState };
        });
        setShow({ item: "Club created successfully.", status: true });
      })
      .catch((err) => console.log(err));
  };

  const deleteClub = (clubId, clubName) => {
    let newClubsState = state.clubs;
    delete newClubsState[String(clubId)];
    axios
      .delete(`/api/clubs/${clubId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("club has been removed!!!!", res);
          setState((prev) => {
            return { ...prev, clubs: newClubsState };
          });
        }
      })
      .catch((err) => err);
  };

  const updateClubInfo = (clubInfo, newBook) => {
    console.log("SETCLUBBOOK@@@@@@@@@", clubInfo, newBook);
    let newClubObj = clubInfo;
    const clubId = clubInfo.id;

    if (newBook !== null) {
      //Updates CLub Book
      console.log("UPDATING NEW CLUB OBJ w. new BOOK");
      newClubObj = { ...state.clubs[clubId], current_book: newBook.id };
    }
    const newState = {
      ...state.clubs,
      [clubId]: newClubObj,
    };
    const dataToSend = { newClubObj, newBook };
    // Pass newbook & the club,
    console.log("Update Club Book (Ax DATA SENT)", dataToSend);
    axios
      .put(`/api/clubs/${clubId}`, dataToSend)
      .then((res) => {
        console.log("Update Club (Ax RX *********)", res.data);

        //Update State on success
        console.log("NEWCLUB STATE", newState);
        setState((prev) => {
          return { ...prev, clubs: newState };
        });
        setState((prev) => {
          return { ...prev, currClub: newClubObj };
        });
        // setCurrClub(newClubObj);
        setShow({
          item: `${newBook.title} assigned successfully to \n ${newClubObj.book_club_name}.`,
          status: true,
        });
      })
      .catch((err) => console.log(err));
  };
  //==News ==============================================

  const postNews = (input) => {
    console.log("postnews Input", input);
    axios
      .post(`/api/users/${user.id}/posts`, input)
      .then(() => {
        // props.setNews((prevState) => [post, ...prevState]);
        setState((prev) => {
          return { ...prev, news: [input, ...prev.news] };
        });
        setShow({ item: "Posted successfully to your feed.", status: true });
      })
      .catch((err) => console.log("errorroroor", err));
  };

  const postClubNews = (post) => {
    console.log("POST CLUB NEWS", post);
    //Add userInfo To Post
    const clubPost = {
      ...post,
      userId: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      clubId: state.currClub.id,
    };
    //Prepend to state
    const newClubPosts = [clubPost, ...state.clubNews];
    return axios.post(`/api/clubs/:id/newsfeed`, clubPost).then((res) => {
      console.log("POST RESPONSE:", res.data);
      console.log("POST RESPONSE:", res.data);
      //Update State
      // setClubNews(newClubPosts);
      setState((prev) => {
        return { ...prev, clubNews: newClubPosts };
      });
    });
  };
  const setClubNews = (posts) => {
    setState((prev) => {
      return { ...prev, clubNews: posts };
    });
  };

  //=RETURNs=======================================================
  return {
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
    saveBookNotes,
    rmvBookFrShelf,
    joinClub,
    createClub,
    deleteClub,
    updateClubInfo,
    postNews,
    postClubNews,
  };
}
