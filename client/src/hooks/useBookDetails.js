import { useState, useEffect } from "react";
import axios from "axios";

export default function currBookDetails(OLBookId) {
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (OLBookId === "initial") {
      return null;
    }
    let book = {
      id: OLBookId,
      title: "",
      author: "",
      published: "",
      description: "",
      first_publish_year: "",
      number_of_pages: "",
      subjects: null,
      works: null,
      coverLink: `https://covers.openlibrary.org/b/olid/${OLBookId}-L.jpg`,
    };

    if (OLBookId) {
      //Fetch Book Details
      axios
        .get(`https://openlibrary.org/books/${OLBookId}.json`)
        .then((res) => {
          book = {
            ...book,
            title: res.data.title,
            published: res.data.publish_date,
            first_publish_year: res.data.first_publish_year,
            author: res.data.authors[0].key,
            works: res.data.works[0].key,
            number_of_pages: number_of_pages,
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
                setDetails(book);
              });
          }
        })
        .catch((e) => console.log("Error: axios get book details ", e));
    }
  }, [OLBookId]);

  return details;
}
