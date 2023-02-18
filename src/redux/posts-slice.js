/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// https://jsonplaceholder.typicode.com/posts
const initialState = {
  posts: [],
  loading: 'idle',
  error: null,
};

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return data;
  } catch (err) {
    return rejectWithValue('Ошибка');
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // setPosts: (state, action) => {
    //   state.posts = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        console.log(action);
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        console.log(action);
        state.loading = 'idle';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.payload || action.error.message;
        console.log(action);
      });
  },
  // {
  //   [getPosts.fulfilled]: () => console.log('fulfilled'),
  //   [getPosts.pending]: () => console.log('pending'),
  //   [getPosts.rejected]: () => console.log('rejected'),
  // },
});

export const postsReducer = postsSlice.reducer;
