import { useState, useEffect } from "react";
import axios from 'axios';
import cvtArrayToObj from '../helpers/helpers'


export default function useApplicationData() {
  const [state, setState] = useState({
    user: {
      id: 1,
      firstName: "Mark",
      lastName: "Twain",
    },
    books: {},
    wishList: {},
    friends: {},
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
  //Setters
  const setWishlist = () => {
    console.log('Click')
  }
  const setCurrBook = (inputBook) => {
    setState((prev) => { return { ...prev, currBook: inputBook } });
  }
  return {
    state,
    setWishlist,
    setCurrBook,
  }
}