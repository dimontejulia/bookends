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
      text: `
        SELECT  
        club.id AS id, 
        current_book,
        admin_id,
        book_club_name,
        date_read,
        rating,
        comments,
        status,
        avatar
        FROM book_club club
        JOIN books ON club.current_book = books.id
        WHERE club.id = $1;
      `,
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
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addClubToUsersClubs = (userId, clubId) => {
    const query = {
      text: `
          INSERT INTO user_book_clubs (user_id, book_club_id) 
          VALUES ($1, $2) RETURNING *`,
      values: [userId, clubId],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
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
    addClubToUsersClubs,
    editClub,
    deleteClub,
  };
};
