const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getBooks, addBookToUser }) => {
  // books
  router.get("/", (req, res) => {
    getBooks()
      .then((books) => res.json(books))
      .catch((err) => res.json({ msg: err.message }));
  });

  // books/:id
  router
    .get("/:id", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .put("/:id", (req, res) => {
      if (process.env.TEST_ERROR) {
        setTimeout(() => response.status(500).json({}), 1000);
        return;
      }

      const { user_id, book_id } = req.body.book;
      addBookToUser(user_id, book_id)
        .then((book) => res.json(book))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  // books/trending
  router
    .get("/trending", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/trending", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/trending", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
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
