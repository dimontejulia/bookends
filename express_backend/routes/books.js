const express = require('express');
const router = express.Router();
const {getPostsByUsers} = require('../helpers/dataHelpers');

module.exports = ({ getUsers }) => {

  // books
  router.get('/', function (req, res) {
    //getBooks()
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });

  // books/:id
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

  // books/trending
  router
    .get('/trending', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/trending', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/trending', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });

  // books/genre
  router
    .get('/genre', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .post('/genre', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    })
    .delete('/genre', (req, res) => {
      getUsers()
        .then(users => res.json(users))
        .catch(err => res.json({ msg: err.message }))
    });
    
  return router;
}