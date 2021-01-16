const express = require('express');
const router = express.Router();
const {getPostsByUsers, getPostsByUser} = require('../helpers/dataHelpers');

module.exports = ({ getUsers, findUserByEmail, addUser,
  getUsersPosts, getOneUsersPosts }) => {

  // users
  router.get('/', function (req, res) {
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });

  // users/:id
  router
    .get('/:id', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  // users/:id/books
  router
    .get('/:id/books', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id/books', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id/books', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  // users/:id/clubs
  router
    .get('/:id/clubs', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id/clubs', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id/clubs', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  router
    .get('/:id/friends', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id/friends', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id/friends', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  router
    .get('/:id/wishlist', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id/wishlist', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id/wishlist', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  // users/:id/posts
  router
    .get('/:id/posts', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/:id/posts', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/:id/posts', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  // users/posts
  router.get('/posts', (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
}