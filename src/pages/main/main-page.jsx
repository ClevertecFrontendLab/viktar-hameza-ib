import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { CardBook } from '../../components/card-book/card-book';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { Loader } from '../../components/loader/loader';
import { Toast } from '../../components/toast/toast';
import { getBooks } from '../../redux/books-slice';
import { getCategories } from '../../redux/categories-slice';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const [view, setView] = useState('grid');
  const { books, booksLoading, booksError } = useSelector((state) => state.books);
  const { categories, categoriesLoading, categoriesError } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }
  }, [dispatch, books]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);

  return (
    // eslint-disable-next-line
    <React.Fragment>
      {categoriesError || booksError ? (
        <Toast />
      ) : categoriesLoading || booksLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <ControlPanel setView={setView} view={view} />
          <ul className={cn(styles.books, view === 'grid' ? styles.booksGrid : styles.booksList)}>
            {books.map((book) => (
              <li key={book.id} className={styles.listItem} data-test-id='card'>
                <CardBook {...book} view={view} />
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
