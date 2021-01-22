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
        LEFT OUTER JOIN books ON club.current_book = books.id
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

  const editClub = (clubObj, bookObj) => {
    const { current_book, book_club_name, avatar } = clubObj;
    const query = {
      text: `
        UPDATE book_club
        SET current_book = $2,
        book_club_name = $3,
        avatar = $4
        WHERE id = $1
        RETURNING *;
      `,
      values: [clubObj.id, current_book, book_club_name, avatar],
    };

    return checkDBForBook(bookObj.id)
      .then((bookInDB) => {
        if (!bookInDB) {
          addBookToDB(bookObj);
        }
      })
      .then(() => {
        return db.query(query);
      });
  };

  const checkDBForBook = (bookId) => {
    const query = {
      text: `SELECT count(*) FROM books WHERE id = $1`,
      values: [bookId],
    };

    return db
      .query(query)
      .then((res) => Number(res.rows[0].count))
      .catch((err) => err);
  };

  const addBookToDB = (bookObj) => {
    const { id, title, author, subject } = bookObj;
    const query = {
      text: `INSERT INTO books (id, title, author, subject) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [id, title, author[0], subject],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteClub = (clubId, clubName) => {
    const query = {
      text: `DELETE FROM book_club WHERE id = $1 AND book_club_name = $2`,
      values: [clubId, clubName],
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
