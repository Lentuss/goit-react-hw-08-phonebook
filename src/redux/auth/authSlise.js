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
    [register.pending]: (state, action) => console.log(action),
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => action.payload,
    [logIn.pending]: (state, action) => console.log(action),
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, action) => action.payload,
    [logOut.pending]: (state, action) => console.log(action),
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, action) => action.payload,
    [fetchUser.pending]: (state, action) => console.log(action),
    [fetchUser.fulfilled](state, action) {
      // console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [fetchUser.rejected]: (state, action) => action.payload,
  },
});

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
