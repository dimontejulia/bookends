import { createStore, combineReducers } from 'redux';
import { books, users } from './reducers'
import { todos } from './components/todos/reducers';

const reducers = {
  // todos,
  users,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

