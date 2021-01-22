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
}) => {
  // clubs

  router
    .get("/:id", (req, res) => {
      getSpecificClub(req.params.id)
        .then((club) => {
          res.json(club);
        })
        .catch((err) => res.json({ msg: err.message }));
    })
    .put("/:id", (req, res) => {
      // const { current_book, book_club_name, avatar } = req.body;
      const { newClubObj, newBook } = req.body;
      // editClub(req.params.id, current_book, book_club_name, avatar)
      // console.log(
      //   chalk.yellow("\n\nROutes CLubs before then", req.body, "\n\n")
      // );

      editClub(newClubObj, newBook)
        .then((clubs) => {
          console.log(chalk.yellow("\n\nROutes CLubs", clubs, "\n\n"));
          res.json(clubs);
        })
        .catch((err) => res.json({ msg: err.message }));
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
