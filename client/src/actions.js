export const ADD_BOOK = 'ADD_BOOK';
export const addBook = text => ({
  type: ADD_BOOK,
  payload: { text }
});

export const REMOVE_BOOK = 'REMOVE_BOOK';
export const removeBook = text => ({
  type: REMOVE_BOOK,
  payload: { text }
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = newUser => ({
  type: CREATE_USER,
  payload: { newUser }
});

export const SET_USERS = 'SET_USERS';
export const setUsers = id => ({
  type: SET_USERS,
  payload: { id }
});