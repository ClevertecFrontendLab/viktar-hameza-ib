/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../api/api';
import { API_URL } from '../consts/host';

const initialState = {
  loading: false,
  error: null,
  auth: false,
  user: null,
};

export const postLogin = createAsyncThunk('login/postlogin', async (arg) => {
  const { data } = await api.post(API_URL.LOGIN, { ...arg });

  localStorage.setItem('token', data.jwt);
  console.log('---', data);

  return data;
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.auth = true;
        console.log(state.auth);
      })
      .addCase(postLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const loginReducer = loginSlice.reducer;
