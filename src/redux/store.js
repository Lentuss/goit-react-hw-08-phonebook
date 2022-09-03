import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './phonebook/phonebookReducer';
import authSlice from './auth/authSlise';

const contacts = combineReducers({ items, filter, authSlice });

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
