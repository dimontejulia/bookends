const express = require("express");
const router = express.Router();
const chalk = require("chalk");

module.exports = ({
  getClubs,
  getSpecificClub,
  deleteClub,
  addClub,
  addClubToUsersClubs,
  editClub,
  editClubWithBook,
  getClubNews,
  getClubBookHistory,
}) => {
  // clubs

  // /api/clubs/:id/newsfeed
  router.get("/:id/newsfeed", (req, res) => {
    getClubNews(req.params.id).then((clubNews) => {
      console.log("clubnews response", clubNews);
      res.json(clubNews);
    });
  });

  router
    .get("/:id", (req, res) => {
      getSpecificClub(req.params.id);
      // getClubBookHistory(req.params.id);
      get
        .then((club) => {
          res.json(club);
          console.log("club=======", club);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .put("/:id", (req, res) => {
      console.log(chalk.cyanBright("1", req.body));
      const { newClubObj, newBook } = req.body;
      if (newBook) {
        console.log(chalk.cyanBright("With BOOK"));
        editClubWithBook(newClubObj, newBook)
          .then((club) => {
            res.json(club);
          })
          .catch((err) => res.json({ msg: err.message }));
      } else {
        console.log(chalk.cyanBright("EDIT NO BOOK"));
        editClub(newClubObj)
          .then((club) => {
            res.json(club);
          })
          .catch((err) => res.json({ msg: err.message }));
      }
    })
    .delete("/:id", (req, res) => {
      deleteClub(req.params.id)
        .then((clubs) => res.json(clubs))
        .catch((err) => res.json({ msg: err.message }));
    });

  // /api/clubs/new
  router.post("/new", (req, res) => {
    const { userId, clubName, avatar } = req.body;
    addClub(userId, clubName, avatar)
      .then((club) => {
        addClubToUsersClubs(userId, club.id).then((res) => {
          res.json(user);
        });
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  // /api/clubs
  router.get("/", (req, res) => {
    getClubs()
      .then((users) => res.json(users))
      .catch((err) => res.json({ msg: err.message }));
  });

  return router;
};
