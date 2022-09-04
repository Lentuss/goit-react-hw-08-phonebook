import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './phonebook/phonebookReducer';
import authSlice from './auth/authSlise';

const contacts = combineReducers({ items, filter, authSlice });

export const store = configureStore({
  reducer: {
    contacts,
  },
});
