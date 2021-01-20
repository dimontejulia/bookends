var express = require("express");
var router = express.Router();

module.exports = ({ addUser, authenticateUser, getClubDetails }) => {
  router.post("/login", function (req, res, next) {
    const { email, password } = req.body;
    authenticateUser(email, password)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.json(console.log("error authenticating user")));
  });

  router.post("/register", function (req, res, next) {
    const { first_name, last_name, email, password, age, gender } = req.body;
    console.log(
      "REGISTER",
      first_name,
      last_name,
      email,
      password,
      age,
      gender
    );
    addUser(first_name, last_name, email, password, age, gender)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  router.get("/clubs/:id", function (req, res) {
    console.log("CLUB ROUTE HIT", req.params.id);
    getClubDetails(req.params.id)
      .then((club) => {
        console.log("ClubDetails fr Svr", club);
        res.json(club);
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  router
    .get("/", (req, res, next) => {
      res.render("index", { title: "Express" });
    });

  return router;
};
