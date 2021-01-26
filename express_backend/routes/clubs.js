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
  addClubNews,
  getClubBookHistory,
  getClubMembers,
}) => {
  // clubs

  // /api/clubs/:id/newsfeed
  router
    .get("/:id/newsfeed", (req, res) => {
      getClubNews(req.params.id)
        .then((clubNews) => {
          res.json(clubNews);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .post("/:id/newsfeed", (req, res) => {
      console.log(chalk.cyanBright("news", req.body));
      addClubNews(req.body)
        .then((newsPost) => {
          console.log("clubnews response", newsPost);
          res.json(newsPost);
        })
        .catch((err) => res.json({ msg: err.message }));
    });

  // /api/clubs/:id/members
  router.get("/:id/members", (req, res) => {
    getClubMembers(req.params.id)
      .then((clubMbrs) => {
        res.json(clubMbrs);
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  router
    .get("/:id", (req, res) => {
      getSpecificClub(req.params.id)
        .then((club) => {
          res.json(club);
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

  router.get("/:id/history", (req, res) => {
    getClubBookHistory(req.params.id)
      .then((club) => {
        res.json(club);
      })
      .catch((err) => res.json({ msg: err.message }));
  });

  // /api/clubs/new
  router.post("/new", (req, res) => {
    const { userId, clubName, clubDescription, avatar } = req.body;
    addClub(userId, clubName, clubDescription, avatar)
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
