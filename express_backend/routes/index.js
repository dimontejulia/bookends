var express = require('express');
var router = express.Router();

module.exports = ({ authenticateUser }) => {
  router
    .post('/login', function(req, res, next) {
      console.log ("POST /LOGIN")
      const { email, password } = req.body;
      console.log("LOGIN PARAMS: ====", email, password);
      authenticateUser(email, password)
        .then((user) => {
          console.log('POST LOGIN USER ->', user);
          res.json(user);
        })
        .catch((err) => res.json(console.log('error authenticating user')));
    });

  router
    .post("/register", function (req, res, next) {
      const { first_name, last_name, email, password } = req.body;
      console.log("REGISTER",first_name, last_name, email, password);
      addUser(first_name, last_name, email, password)
        .then((user) => {
          res.json(user);
        })
        .catch((err) => res.json({ msg: err.message }));
    });

    router
      .get('/', function(req, res, next) {
        console.log("ROOT")
        res.render('index', { title: 'Express' });
      });
  return router;
}
