const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getUsers, getUserBooks, addBook, getFriends }) => {
  // users/:id/books
  router
    .get("/:id/books", (req, res) => {
      getUserBooks(req.params.id)
        .then((books) => {
          res.json(books);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/books", (req, res) => {
      const { userBooks } = req.body;
      const userBook = userBooks.slice(-1).pop();
      console.log("userBook", userBook);
      console.log("user", req.params.id);
      addBook(req.params.id, userBook)
        .then((users) => {
          console.log("RX BOOKS ->>>>", books);
          res.json(users);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/books", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  // api/users/:id/friends
  router
    .get("/:id/friends", (req, res) => {
      getFriends(req.params.id)
        .then((friends) => res.json(friends))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/friends", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/friends", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  // users/:id/clubs
  router
    .get("/:id/clubs", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/clubs", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/clubs", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  router
    .get("/:id/wishlist", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/wishlist", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/wishlist", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  // users/:id/posts
  router
    .get("/:id/posts", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/posts", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/posts", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });

  // users/posts
  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );

    // users/:id
    router
      .get("/:id", (req, res) => {
        getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({ msg: err.message }));
      })
      .post("/:id", (req, res) => {
        getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({ msg: err.message }));
      })
      .delete("/:id", (req, res) => {
        getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({ msg: err.message }));
      });

    // users
    router.get("/", (req, res) => {
      getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.json({ msg: err.message }));
    });
  });

  return router;
};
