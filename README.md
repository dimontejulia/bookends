# Storybook

To install
`npx sb init`
To Run
`npm run storybook`

# Make local PSQL DB

createdb final -O development
Might need to psql createdb final -O development

# To start both fron and backend

## to run Client / react

## ./final-project/client$

`npm start`

#### Can also run in the backend folder

< unable to run front end from root ATM >

## connect to db

CREATE DATABASE final;
CREATE ROLE development WITH LOGIN PASSWORD 'development';
GRANT ALL PRIVILEGES ON DATABASE final TO development;

\c final development;

### Checklist

FRONT END
react router - installed
axios DONE
node-sass DONE

BACK END
nodemon - DONE
pg-native - DONE

React front-end is running on port 3000
Rails back-end is running on port 8080 (or any other)

==========================================================

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
