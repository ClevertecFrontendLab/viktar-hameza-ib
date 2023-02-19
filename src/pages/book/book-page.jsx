import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Book } from '../../components/book/book';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Loader } from '../../components/loader/loader';
import { Toast } from '../../components/toast/toast';
import { getBook } from '../../redux/book-slice';
import { getCategories } from '../../redux/categories-slice';

export const BookPage = () => {
  const { bookId } = useParams();

  const dispatch = useDispatch();
  const { book, loading, error } = useSelector((state) => state.book);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);

  useEffect(() => {
    dispatch(getBook(bookId));
  }, [dispatch, bookId]);

  return (
    <div>
      <Breadcrumbs title={book?.title} />
      {error ? (
        <Toast />
      ) : loading ? (
        <Loader />
      ) : (
        book && (
          <div className='container'>
            <Book {...book} />
          </div>
        )
      )}
    </div>
  );
};
