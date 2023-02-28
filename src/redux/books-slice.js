/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { params } from '../api/api';
import { URL_API } from '../consts/host';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null,
};

export const getBooks = createAsyncThunk('books/getbooks', async () => {
  const { data } = await axios.get(`${URL_API}/books`, params);

  return data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.booksLoading = true;
        state.booksError = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.booksLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.booksLoading = false;
        state.booksError = true;
      });
  },
});

export const booksReducer = booksSlice.reducer;
