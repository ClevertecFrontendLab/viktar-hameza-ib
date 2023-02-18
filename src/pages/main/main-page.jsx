import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

// import { books } from '../../assets/data/books';
import { CardBook } from '../../components/card-book/card-book';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { Loader } from '../../components/loader/loader';
import { Toast } from '../../components/toast/toast';
import { getCategories } from '../../redux/categories-slice';
import { getBooks } from '../../redux/books-slice';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const [view, setView] = useState('grid');
  const { categories, categoriesLoading, categoriesError } = useSelector((state) => state.categories);
  const { books, booksLoading, booksError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
      //   .unwrap()
      //   .then(() => console.log('Все ок'))
      //   .catch(() => console.log('Все плохо'));
      // console.log('loading');
    }
  }, [dispatch, categories]);

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }
  }, [dispatch, books]);

  return (
    <React.Fragment>
      <ControlPanel setView={setView} view={view} />
      {categoriesLoading || (booksLoading && <Loader />)}
      {categoriesError || booksError ? (
        <Toast />
      ) : (
        <ul className={cn(styles.books, view === 'grid' ? styles.booksGrid : styles.booksList)}>
          {books.map((book) => (
            <li key={book.id} className={styles.listItem} data-test-id='card'>
              <CardBook {...book} view={view} />
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
