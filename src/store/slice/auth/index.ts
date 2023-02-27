import { IAuthState } from './../../../common/types/auth/index';
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../thunks/auth';

const initialState: IAuthState = {
  user: {
    id: null,
    firstName: '',
    username: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    watchlist: [
      {
        id: null,
        name: '',
        assetId: '',
        createdAt: '',
        updatedAt: '',
        user: null,
      },
    ],
  },
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.isLoading = false;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.isLoading = false;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.isLogged = false;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.isLogged = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
    });
  },
});

export default authSlice.reducer;
