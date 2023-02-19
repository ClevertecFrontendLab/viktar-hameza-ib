/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  loading: false,
  error: null,
};

export const getBook = createAsyncThunk('books/getbook', async (bookId) => {
  const res = await fetch(`https://strapi.cleverland.by/api/books/${bookId}`);
  const data = await res.json();

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
