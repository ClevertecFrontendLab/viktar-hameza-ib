import React, { useState } from 'react';
import cn from 'classnames';

import { books } from '../../assets/data/books';
import { CardBook } from '../../components/card-book/card-book';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { Loader } from '../../components/loader/loader';
import { Toast } from '../../components/toast/toast';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const [view, setView] = useState('grid');

  return (
    <React.Fragment>
      {/* <Loader /> */}
      {/* <Toast /> */}
      <ControlPanel setView={setView} view={view} />
      <ul className={cn(styles.books, view === 'grid' ? styles.booksGrid : styles.booksList)}>
        {books.map((book) => (
          <li key={book.id} className={styles.listItem} data-test-id='card'>
            <CardBook {...book} view={view} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
