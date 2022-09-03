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
    console.log(credentials);
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    if (data.token) {
      Notify.success('Congrats!Account created!');
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
    }
    return data;
  } catch (error) {
    Notify.failure(
      'You are not logged in. Please confirm the entered data is correct'
    );
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const resp = await axios.post('/users/logout');
    token.unset();
    console.log(resp.status);
    if (resp.status === 200) {
      Notify.info('You are logged out');
    }
  } catch (error) {
    alert('No, stay here!!!');
  }
});

export const fetchUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

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
