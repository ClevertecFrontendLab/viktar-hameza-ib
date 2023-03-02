/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../api/api';
import { API_URL } from '../consts/host';

const initialState = {
  book: null,
  loading: false,
  error: null,
};

export const getBook = createAsyncThunk('books/getbook', async (bookId) => {
  const { data } = await api.get(`${API_URL.BOOKS}/${bookId}`);

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
