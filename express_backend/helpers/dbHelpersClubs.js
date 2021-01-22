module.exports = (db) => {
  const getClubs = () => {
    const query = {
      text: "SELECT * FROM users_books",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSpecificClub = (clubID) => {
    const query = {
      text: `SELECT * FROM book_club 
      JOIN books ON book_club.current_book = books.id
      WHERE book_club.id = $1`,
      values: [clubID],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addClub = (userId, clubName, avatar) => {
    const query = {
      text: `
          INSERT INTO book_club (admin_id, book_club_name, avatar) 
          VALUES ($1, $2, $3) RETURNING *`,
      values: [userId, clubName, avatar],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const editClub = (clubId, currBookId, clubName, avatar) => {
    const query = {
      text: `
        UPDATE book_clubs
        SET current_book = $2,
        book_club_name = $3,
        avatar = $4
        WHERE id = $1
        RETURNING *;
      `,
      values: [clubId, currBookId, clubName, avatar],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteClub = (clubId) => {
    const query = {
      text: `DELETE FROM book_club WHERE id = $1`,
      values: [clubId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getClubs,
    getSpecificClub,
    addClub,
    editClub,
    deleteClub,
  };
};
