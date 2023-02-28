/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { params } from '../api/api';
import { URL_API } from '../consts/host';

const initialState = {
  categories: [],
  categoriesLoading: false,
  categoriesError: null,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const { data } = await axios.get(`${URL_API}/categories`, params);

    return data;
  },
  {
    // eslint-disable-next-line
    condition: (_, { getState }) => {
      const { categories } = getState();

      if (categories.categoriesLoading) return false;
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
        state.categoriesLoading = true;
        state.categoriesError = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = true;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
