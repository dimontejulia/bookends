const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({
  getUsers,
  getUserBooks,
  addBook,
  deleteBook,
  getFriends,
  getUserClubs,
  getWishlist,
  getPosts,
  addPost,
  updateUsersBooks,
  addBookToUser,
}) => {
  // users/:id/books
  router
    .get("/:id/books", (req, res) => {
      //Join from user Books & User Books Data
      getUserBooks(req.params.id)
        .then((books) => {
          res.json(books);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/books", (req, res) => {
      console.log("POST>>>\n\n", req.body, "\n\n===================");
      addBookToUser(req.params.id, req.body)
        .then((book) => {
          console.log("RX BOOKS ->>>>", book);
          res.json(book);
        })
        .catch((err) => {
          console.log("AAFKJDNFLKJHD");
          res.json({ msg: err.message });
        });
    })
    .delete("/:userId/books/:bookId", (req, res) => {
      const { userId, bookId } = req.params;
      deleteBook(bookId, userId)
        .then((book) => {
          res.json(book);
        })
        .catch((err) => res.json({ msg: err.message }));
    });

  //users/:userId/books/:bookId
  router.put("/:id/books/:bookId", (req, res) => {
    const userId = req.params.id;
    const bookId = req.params.bookId;
    const bookData = req.body;
    updateUsersBooks(userId, bookId, bookData)
      .then((res) => {
        res.json("Success");
      })
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
      getUserClubs(req.params.id)
        .then((clubs) => {
          res.json(clubs);
        })
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
      getWishlist(req.params.id)
        .then((wishlistBooks) => res.json(wishlistBooks))
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
      getPosts(req.params.id)
        .then((posts) => res.json(posts))
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/posts", (req, res) => {
      addPost(req.body)
        .then((posts) => res.json(posts))
        .catch((err) => res.json({ msg: err.message }));
    })
    .delete("/:id/posts", (req, res) => {
      getUsers()
        .then((posts) => res.json(posts))
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
