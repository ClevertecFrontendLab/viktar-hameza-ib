import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from './books-slice';
import { categoriesReducer } from './categories-slice';
import { userReducer } from './user-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    categories: categoriesReducer,
  },
});
