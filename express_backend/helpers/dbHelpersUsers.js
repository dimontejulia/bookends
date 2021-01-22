const chalk = require("chalk");

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getClubDetails = (clubID) => {
    const query = {
      text: `SELECT * FROM book_club WHERE id = $1`,
      values: [clubID],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => err);
  };

  const getUserBooks = (userID) => {
    const query = {
      text: `
          SELECT book_id as id, date_read as dateRead, rating, comments, status, title, author, subject, first_publish_year
          FROM users_books
          JOIN books ON books.id = users_books.book_id
          WHERE user_id = $1
          `,
      values: [userID],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const { friendsEmail } = email;
    const query = {
      text: `SELECT first_name AS firstName, last_name AS lastName, email, id FROM users WHERE email = $1`,
      values: [friendsEmail],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addFriend = (userId, friendId) => {
    const query = {
      text: `INSERT INTO friends (user_id, users_friend) VALUES ($1, $2)`,
      values: [Number(userId), friendId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const deleteFriend = (userId, friendId) => {
    const query = {
      text: `DELETE FROM friends WHERE user_id = $1 AND users_friend = $2`,
      values: [userId, friendId],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (firstName, lastName, email, password, age, gender) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, age, gender) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [firstName, lastName, email, password, age, gender],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("SQLError", err));
  };

  const authenticateUser = (email, password) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1 and password =$2`,
      values: [email, password],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("DB Authenticate Results:", result);
        return result.rows;
      })
      .catch((err) => err);
  };

  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
        FROM users
        INNER JOIN posts
        ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getOneUsersPosts = (id) => {
    const query = {
      text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
        FROM users
        WHERE user_id = $1
        INNER JOIN posts
        ON users.id = posts.user_id`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getFriends = (id) => {
    const query = {
      text: `
          SELECT first_name AS firstName, last_name AS lastName, email, u.id AS userId
          FROM friends f
          JOIN users u ON f.users_friend = u.id
          WHERE f.user_id =$1;`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addBookToUser = (userId, usersNewBook) => {
    console.log(">>>>1");
    const { id, title, author, subject } = usersNewBook;
    const bookCheckQuery = {
      text: `SELECT count(*) FROM books WHERE id = $1`,
      values: [id],
    };

    const userBookCheckQuery = {
      text: `SELECT count(*) FROM users_books WHERE book_id = $1`,
      values: [id],
    };

    const addBookQuery = {
      text: `INSERT INTO books (id, title, author, subject) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [id, title, author[0], subject],
    };

    // console.log("!!addBookToUser", userId, usersNewBook);

    // check if book user adds is in books table,
    // if it is in books table, check if book is in user_books table,
    // if it is not in user_books table add book to user's shelf
    // if it is in user_books table send message back to userstating that the book is already
    // on specific users shelf
    // if book is not in books table or users_books table add book to books table and user_books table
    console.log(">>>>2");
    Promise.all([db.query(bookCheckQuery), db.query(userBookCheckQuery)])
      .then(([bookInDbCheck, userHasBookCheck]) => {
        const bookCheck = Number(bookInDbCheck.rows[0].count);
        const userBookCheck = Number(userHasBookCheck.rows[0].count);
        console.log(
          "bookCheck ->",
          bookCheck,
          "userBookCheck ->",
          userBookCheck
        );
        if (userBookCheck) {
          console.log("Book Exists and is in shelf");
        } else if (!userBookCheck && bookCheck) {
          console.log("Book Exists > NOT in shelf");
          addToUsersBooks(userId, usersNewBook);
        } else {
          return db
            .query(addBookQuery) //ADDS BOOK TO DB
            .then(() => {
              addToUsersBooks(userId, usersNewBook); // ADD BOOK TO USER SHELF
            });
        }
      })
      .catch((err) => console.log("LAST DBERROR:>>>>", err));
  };

  const addToUsersBooks = (userId, userBooks) => {
    const { id } = userBooks;

    const query = {
      text: `INSERT INTO users_books (user_id, book_id) VALUES ($1, $2) RETURNING *`,
      values: [userId, id],
    };
    console.log("Add to USER BOOKS Q", query);
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const updateUsersBooks = (userId, bookId, bookData) => {
    const { id, dateread, rating, comments, status } = bookData;

    const query = {
      text: `
        UPDATE users_books
        SET date_read= $3,
        rating= $4,
        comments = $5,
        status = $6
        WHERE user_id = $1 AND book_id = $2
        RETURNING *;
      `,
      values: [userId, id, dateread, rating, comments, status],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERR", err));
  };

  const getUserClubs = (userId) => {
    const query = {
      text: `
      SELECT *
      FROM user_book_clubs 
      JOIN book_club 
      ON book_club.id = user_book_clubs.book_club_id
      WHERE user_id = $1;`,
      values: [userId],
    };

    console.log("ADD TO DB FUNCTION!!!!!");
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const getWishlist = (userId) => {
    const query = {
      text: `
      SELECT book_id as id, title, author, subject
        FROM books
        JOIN future_books fb ON books.id = fb.book_id
        WHERE fb.user_id = $1
      `,
      values: [userId],
    };

    console.log("GET WISHLIST");
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const deleteBook = (bookId, userId) => {
    const checkWishList = {
      text: `SELECT count(*) FROM future_books WHERE book_id = $1 AND user_id = $2`,
      values: [bookId, userId],
    };

    const checkUserShelf = {
      text: `SELECT count(*) FROM users_books WHERE book_id = $1 AND user_id = $2`,
      values: [bookId, userId],
    };

    Promise.all([db.query(checkWishList), db.query(checkUserShelf)])
      .then(([checkWishList, checkUserShelf]) => {
        const wishListCount = Number(checkWishList.rows[0].count);
        const userShelfCount = Number(checkUserShelf.rows[0].count);
        console.log(
          "wishListCount ->",
          wishListCount,
          "userShelfCount ->",
          userShelfCount
        );
        if (!userShelfCount && wishListCount) {
          console.log(chalk.yellow("WishList Item Delete"));
          deleteBookWishList(bookId, userId);
        } else if (userShelfCount) {
          console.log(chalk.yellow("UserShelf Item Delete"));
          deleteBookUserShelf(bookId, userId);
        }
      })
      .catch((err) => console.log("DELETE BOOK DB CATCH ->", err));
  };

  const deleteBookUserShelf = (bookId, userId) => {
    const query = {
      text: `DELETE FROM users_books WHERE book_id = $1 AND user_id = $2`,
      values: [bookId, userId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteBookWishList = (bookId, userId) => {
    const query = {
      text: `DELETE FROM future_books WHERE book_id = $1 AND user_id = $2`,
      values: [bookId, userId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPosts = (userId) => {
    const query = {
      text: `
      SELECT u.id AS userId, first_name AS firstName, last_name AS lastName, news.title, news.body, news.timestamp
      FROM friends f
      JOIN users u ON f.users_friend = u.id
      FULL OUTER JOIN newsfeed_posts news ON f.users_friend = news.user_id
      WHERE news.user_id = $1 OR f.user_id = $1
      GROUP BY news.title, first_name, last_name, body, u.id, news.id
      ORDER BY news.id desc;
      `,
      values: [userId],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const addPost = (post) => {
    const { user_id, title, body, timestamp } = post;

    const query = {
      text: `INSERT INTO newsfeed_posts (user_id, title, body, timestamp) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [user_id, title, body, timestamp],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR:>>>>", err));
  };

  return {
    getUsers,
    addFriend,
    getUserByEmail,
    deleteFriend,
    addUser,
    getUserBooks,
    getUserClubs,
    authenticateUser,
    getUsersPosts,
    getOneUsersPosts,
    getFriends,
    deleteBook,
    getWishlist,
    getPosts,
    addPost,

    updateUsersBooks,
    addBookToUser,
  };
};
