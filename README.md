# Bookends - Your Favourite Books, One Shelf.

Stay organized and curious about new books. Displaying book data in a meaningful way to give a clear idea of what they've read and ideas about what they should be reading next.

Users can log in/create an account, search by title, author, etc. using OpenLibrary's Search API. Books can be added to their personal shelf with options to add notes, comments, and ratings. Users are able to share books to their feed and see their friends shelves. Book clubs can also be created, allowing users to connect with their friends and discuss a shared title together.

# Screenshots

## Home Page

Browse books, add to shelf, share thoughts directly from the home page.

## Book Shelf

View titles and search by title, keyword or author. Earn badges for different reading accomplishments.

## Social Page

Add friends, join and create new clubs and write posts about current, past or future reads.

## Book Clubs

Create club pages, add friends, choose a title for the month and discuss as you read.

# Details

- Application was built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Book data is fetched from [Open Library](https://openlibrary.org/dev/docs/api/books)

# Technical Specifications

Bookends client application created using Create React App. Express is the basis for Bookend's API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server
- React Bootstrap
- Scss

# Setup

1. Install dependencies with `npm install`.
2. Running client server `npm start`.
3. Running backend server `npm start`.
