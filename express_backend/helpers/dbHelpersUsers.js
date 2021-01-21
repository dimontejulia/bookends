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

  const getUserBooks = (userID) => {
    console.log("DB GetUSER BOOKS", userID);
    const query = {
      text: `
          SELECT book_id as id, date_read as dateRead, rating, comments, status, title, author, subject
          FROM users_books
          JOIN books ON books.id = users_books.book_id
          WHERE user_id = $1
          `,
      values: [userID],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("result.rows>>>>>>>", result.rows);
        return result.rows;
      })
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
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
        console.log("Add user:", result);
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
          SELECT first_name as firstName, last_name as lastName
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
  const addBook = (user_id, userBooks) => {
    const { id, title, author, subject } = userBooks;

    const query = {
      text: `INSERT INTO books (id, title, author, subject) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [id, title, author[0], subject],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .then((result) => addToUsersBooks(user_id, userBooks))
      .catch((err) => console.log("DBERROR:>>>>", err));
  };

  const addToUsersBooks = (user_id, userBooks) => {
    const { id } = userBooks;

    const query = {
      text: `INSERT INTO users_books (user_id, book_id) VALUES ($1, $2) RETURNING *`,
      values: [user_id, id],
    };

    console.log("ADD TO DB FUNCTION!!!!!");
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const getUserClubs = (user_id) => {
    const query = {
      text: `SELECT book_club_id from user_book_clubs WHERE user_id = $1;`,
      values: [user_id],
    };

    console.log("ADD TO DB FUNCTION!!!!!");
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const getWishlist = (user_id) => {
    const query = {
      text: `
      SELECT book_id as id, title, author, subject
        FROM books
        JOIN future_books fb ON books.id = fb.book_id
        WHERE fb.user_id = $1
      `,
      values: [user_id],
    };

    console.log("GET WISHLIST");
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const getPosts = (user_id) => {
    const query = {
      text: `
      SELECT user_id as id, title, body, timestamp
        FROM newsfeed_posts
        JOIN users usersTable ON newsfeed_posts.user_id = usersTable.id
        WHERE usersTable.id = $1
        ORDER BY timestamp asc
      `,
      values: [user_id],
    };

    console.log("GET WISHLIST");
    return db
      .query(query)
      .then((result) => {
        console.log("RESULT", result.rows);
        return result.rows;
      })
      .catch((err) => console.log("DBERROR from users books:>>>>", err));
  };

  const addPost = (user_id, post) => {
    console.log("in add post");
    const { title, body } = post;
    console.log("post details", post);

    const query = {
      text: `INSERT INTO newsfeed_posts (user_id, title, body) VALUES ($1, $2, $3) RETURNING *`,
      values: [user_id, title, body],
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
    getUserByEmail,
    addUser,
    getUserBooks,
    getUserClubs,
    authenticateUser,
    getUsersPosts,
    getOneUsersPosts,
    getFriends,
    addBook,
    getWishlist,
    getPosts,
    addPost,
  };
};
