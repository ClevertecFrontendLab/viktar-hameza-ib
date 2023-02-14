import { useParams } from 'react-router-dom';

import { books } from '../../assets/data/books';
import { Book } from '../../components/book/book';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';

export const BookPage = () => {
  const { bookId } = useParams();

  const book = books.filter(({ id }) => id === bookId)[0];

  return (
    <div>
      <Breadcrumbs title={book.title} />
      <div className='container'>
        <Book {...book} />
      </div>
    </div>
  );
};
