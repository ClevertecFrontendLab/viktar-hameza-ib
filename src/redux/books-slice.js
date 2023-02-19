/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null,
};

export const getBooks = createAsyncThunk('books/getbooks', async () => {
  const res = await fetch('https://strapi.cleverland.by/api/books');
  const data = await res.json();

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
        console.log(action.payload);
        state.booksLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.booksLoading = false;
        state.booksError = true;
      });
  },
  // {
  //   [getPosts.fulfilled]: () => console.log('fulfilled'),
  //   [getPosts.pending]: () => console.log('pending'),
  //   [getPosts.rejected]: () => console.log('rejected'),
  // },
});

export const booksReducer = booksSlice.reducer;
