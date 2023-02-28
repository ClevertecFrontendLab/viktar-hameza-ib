/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { params } from '../api/api';
import { URL_API } from '../consts/host';

const initialState = {
  book: null,
  loading: false,
  error: null,
};

export const getBook = createAsyncThunk('books/getbook', async (bookId) => {
  const { data } = await axios.get(`${URL_API}/books/${bookId}`, params);

  return data;
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const bookReducer = bookSlice.reducer;
