import { createStore, combineReducers } from 'redux';
import { books } from './reducers'

const reducers = {
  books
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);