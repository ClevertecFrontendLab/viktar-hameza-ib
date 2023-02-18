import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from './categories-slice';
import { postsReducer } from './posts-slice';
import { userReducer } from './user-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    categories: categoriesReducer,
  },
});
