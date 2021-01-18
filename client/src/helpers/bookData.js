/* Fetch Book Details from OL
Covers
https://covers.openlibrary.org/a/olid/OL229501A-S.jpg

Data
https://openlibrary.org/books/OL7353617M.json
*/

import axios from "axios"

const fetchBookDetails = (OLBookID) => {
  OLBookID = 'OL7353617M'
  const book = {
    details: '',
    description: '',
    subjects: [],
    works: {},
  }
  // coverLink: `https://covers.openlibrary.org/a/olid/${OLBookID}-M.jpg`
  axios.get(`https://openlibrary.org/books/${OLBookID}.json`)
    .then((res) => {
      console.log(res.data)
      book.details = res.data
    })
    .then((details) => {
      axios.get(`https://openlibrary.org/${details.works[0]}.json`)
        .then((res) => {
          book.works = res.data
        })
    })
    .catch(e => console.log(e))
};


// useEffect(() => { action }, [bookID])