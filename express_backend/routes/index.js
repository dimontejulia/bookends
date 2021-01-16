var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .get('/login', function(req, res, next) {
    console.log('login get test');
  })
  .post('/login', function(req, res, next) {
    // res.render('register', { title: 'Register' });
    console.log('login post test');
  });

router
  .get('/register', function(req, res, next) {
    console.log('register get test');
  })
  .post('/register', function(req, res, next) {
    console.log('register post test');
  });

module.exports = router;