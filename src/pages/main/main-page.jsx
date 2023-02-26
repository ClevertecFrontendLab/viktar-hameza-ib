import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { CardBook } from '../../components/card-book/card-book';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { Loader } from '../../components/loader/loader';
import { NotFound } from '../../components/not-found/not-found';
import { Toast } from '../../components/toast/toast';
import { getBooks } from '../../redux/books-slice';
import { getCategories } from '../../redux/categories-slice';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [sorting, setSorting] = useState('true');

  const [view, setView] = useState('grid');
  const { categories, categoriesLoading, categoriesError } = useSelector((state) => state.categories);
  const { books, booksLoading, booksError } = useSelector((state) => state.books);

  const filterBooks = useSelector((state) => {
    if (category === 'all') {
      return state.books.books;
    }
    const currentCategory = state.categories.categories.find(({ path }) => path === category);

    return state.books.books.filter((item) => item.categories.includes(currentCategory.name));
  });

  const onSorting = ([...arr], sortingP) => {
    if (!sortingP) {
      return arr.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    }

    return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  };

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
          <ControlPanel setView={setView} view={view} setSortingDES={setSorting} sortingDES={sorting} />

          {!filterBooks.length && <NotFound>В этой категории книг ещё нет</NotFound>}
          <ul className={cn(styles.books, view === 'grid' ? styles.booksGrid : styles.booksList)}>
            {onSorting(filterBooks, sorting).map((book) => (
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
