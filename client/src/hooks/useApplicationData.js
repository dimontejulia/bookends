import { useState, useEffect } from "react";
import axios from 'axios';
import cvtArrayToObj from '../helpers/helpers'


export default function useApplicationData() {
  const [show, setShow] = useState({ item: null, status: false });
  const [state, setState] = useState({
    user: {
      id: 1,
      firstName: "Mark",
      lastName: "Twain",
    },
    books: {},
    wishList: {},
    friends: [],
    news: {
      clubNews: {},
    },
    clubs: {
      clubAdmin: {},
    },
    carouselBooks: {},
    currBook: { id: 'initial' },
    currClub: {},
  })

  const API = 'localhost:3005'
  let user = state.user
  useEffect(() => {
    //==== Initialize State ============================

    Promise.all([
      axios.get(`/api/books/category/movie`),
      axios.get(`/api/books/category/awardWinning`),
      axios.get(`/api/books/category/biography`),
      axios.get(`/api/books/category/dystopian`),
    ]).then(([movie, awardWinning, bios, dystopian]) => {
      setState((prev) => {
        return {
          ...prev,
          carouselBooks: {
            movies: { books: movie.data, catTitle: "It Was a Book First..." },
            awardWinning: { books: awardWinning.data, catTitle: "Award Winning" },
            bios: { books: bios.data, catTitle: "Biographies" },
            dystopian: { books: dystopian.data, catTitle: "Dystopian" },
          }
        }
      })
    }).catch(e => console.log("Carousel Initialization Error", e));

    Promise.all([
      //GET FRIENDS
      axios.get(`/api/users/${user.id}/books`),
      axios.get(`/api/users/${user.id}/wishlist`),
      axios.get(`/api/users/${user.id}/friends`),
      axios.get(`/api/users/${user.id}/clubs`),
      axios.get(`/api/users/${user.id}/posts`)
    ]).then(([rBooks, rWishlist, rFriends, rClubs, rPosts]) => {
      setState((prev) => {
        return {
          ...prev,
          books: cvtArrayToObj(rBooks.data, 'id'),
          wishlist: rWishlist.data,
          friends: rFriends.data,
          clubs: cvtArrayToObj(rClubs.data, 'id'),
          news: rPosts.data,

        }
      })
    })
      .catch(e => console.log("Initialization Error", e));

  }, []);
  //Functions to be passed down as Props (Dealing with state);===================================
  //==Setters==============================================
  const setWishlist = () => {
    console.log('Click')
  }
  const setCurrBook = (input) => {
    setState((prev) => { return { ...prev, currBook: input } });
  }
  const setCurrClub = (input) => {
    setState((prev) => { return { ...prev, currClub: input } });
  }
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
        const newFriendState = { ...state.friends, [res.data.id]: res.data }
        setState((prev) => { return { ...prev, friends: newFriendState } });
        setShow({ item: "Friend added successfully.", status: true });
      } else {
        //FAIL ResJSON will send 'NO USER FOUND'
        console.log(`Response @addFriend: ${res.data}`)
        setShow({ item: "Whoops, can't seem to find that one...", status: true });
      }
    });
    //
  };

  const deleteFriend = (friendId) => {
    console.log("DEL FRIEND START", friendId);
    axios.delete(`/api/users/${user.id}/friends/${friendId}`).then((res) => {
      setState((prev) => { return { ...prev, friends: res.data } });
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
    setState((prev) => { return { ...prev, books: newBookState } });

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



  return {
    state,
    show,
    setShow,
    setWishlist,
    setCurrBook,
    setCurrClub,
    addFriend,
    deleteFriend,
    addBookToShelf,
  }
}