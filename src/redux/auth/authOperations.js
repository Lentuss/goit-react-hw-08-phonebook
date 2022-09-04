import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    if (data.token) {
      Notify.success('Congrats!Account created!');
      localStorage.setItem('token', data.token);
    }
    return data;
  } catch (error) {
    Notify.failure(
      `Registration failed. Please confirm the entered data is correct`
    );
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    if (data.token) {
      Notify.success('You are logged In');
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLogged', true);
    }
    return data;
  } catch (error) {
    Notify.failure(
      'You are not logged in. Please confirm the entered data is correct'
    );
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const resp = await axios.post('/users/logout');
    token.unset();
    if (resp.status === 200) {
      Notify.info('You are logged out');
      localStorage.setItem('token', '');
      localStorage.setItem('isLogged', false);
    }
  } catch (error) {
    alert('No, stay here!!!');
  }
});

export const fetchUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = localStorage.getItem('token');
    const persistedToken = state.contacts.authSlice.token
      ? state.contacts.authSlice.token
      : savedToken;

    if (persistedToken === null) {
      console.log('no token');
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log('current user error:', error.message);
    }
  }
);
