# Boilerplates

These are the project skeletons we created during the kickoff lecture. You can use these as your boilerplate for your project or simply as a reference.

## Express Back-End

- db folder => db connection and db schema, and seed
- model folder => helper functions that interact with the db
- routes folder => router file, use users.js as an example
- helpers => data helpers to reformat the data before sending it back to the client

## React Front-End

The React front-end use a custome hook and a reducer function to load the users in the state.

- hooks folder => custom hook performing the axios request and updating the state (useApplicationData.js)
- reducers folder => reducer function to update the state

## Rails Back-End

The rails backend has been setup to be an API. For now, the user model and controller have been added. The route and controller are namespace under api.

