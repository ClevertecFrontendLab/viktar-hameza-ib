import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from './book-slice';
import { booksReducer } from './books-slice';
import { categoriesReducer } from './categories-slice';
import { loginReducer } from './login-slice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
    books: booksReducer,
    categories: categoriesReducer,
    login: loginReducer,
  },
});
