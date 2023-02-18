/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// https://jsonplaceholder.typicode.com/posts
const initialState = {
  categories: [],
  loading: 'idle',
  error: null,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const res = await fetch('https://strapi.cleverland.by/api/categories');
    const data = await res.json();

    return data;
  },
  {
    // eslint-disable-next-line
    condition: (_, { getState }) => {
      const { categories } = getState();

      if (categories.loading === 'loading') return false;
    },
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        console.log(action);
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = 'idle';
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.payload || action.error.message;
        console.log('rejected');
      });
  },
  // {
  //   [getPosts.fulfilled]: () => console.log('fulfilled'),
  //   [getPosts.pending]: () => console.log('pending'),
  //   [getPosts.rejected]: () => console.log('rejected'),
  // },
});

export const categoriesReducer = categoriesSlice.reducer;
