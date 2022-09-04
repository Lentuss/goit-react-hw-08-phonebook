import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, fetchUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => state,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => action.payload,
    [logIn.pending]: (state, action) => state,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, action) => action.payload,
    [logOut.pending]: (state, action) => state,
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, action) => action.payload,
    [fetchUser.pending]: (state, action) => state,
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [fetchUser.rejected]: (state, action) => action.payload,
  },
});

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
