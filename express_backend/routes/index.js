var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .post('/login', function(req, res, next) {
    authenticateUser()
      .then((user) = res.json(user))
      .catch((err) => res.json(console.log('error authenticating user')));
  });

router
  .get('/register', function(req, res, next) {
    console.log('register get test');
  })
  .post('/register', function(req, res, next) {
    console.log('register post test');
  });

module.exports = router;