const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({
  getBooks,
  addBookToUser,
  getSpecificBook,
  getCarouselBooks,
}) => {
  // books
  router.get("/", (req, res) => {
    getBooks()
      .then((books) => res.json(books))
      .catch((err) => res.json({ msg: err.message }));
  });

  // books/:id
  router.get("/:id", (req, res) => {
    getSpecificBook(req.params.id)
      .then((book) => res.json(book))
      .catch((err) => res.json({ msg: err.message }));
  });
  // .put("/:id", (req, res) => {
  //   const { book_id } = req.body;
  //   console.log("PUT BOOK TO USER START");
  //   addBookToUser(book_id)
  //     .then((book) => {
  //       console.log("PUT BOOK TO USER FINISH");
  //       console.log("BOOK", book);
  //       res.json(book);
  //     })
  //     .catch((err) => res.json({ msg: err.message }));
  // })

  // api/books/:category
  router.get("/category/:category", (req, res) => {
    getCarouselBooks(req.params.category)
      .then((books) => {
        res.json(books);
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  // books/genre
  router
    .get("/genre", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/genre", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/genre", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  return router;
};
