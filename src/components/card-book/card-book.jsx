// eslint-disable-next-line import/no-extraneous-dependencies
import Highlighter from 'react-highlight-words';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { BASE_URL } from '../../consts/host';
import { NoImg } from '../no-img/no-img';
import { Rating } from '../rating/rating';

import style from './card-book.module.scss';

const Highlight = ({ children }) => (
  <mark data-test-id='highlight-matches' className={style.highlightClass}>
    {children}
  </mark>
);

const Button = ({ isBooked, bookedTill, className }) => {
  let text = 'Забронировать';

  if (isBooked) {
    text = 'Забронирована';
  }
  if (bookedTill) {
    text = `Занята до ${bookedTill}`;
  }

  return (
    <button className={cn(className, isBooked && style.isBooked, bookedTill && style.bookedTill)} type='button'>
      {text}
    </button>
  );
};

export const CardBook = ({ id, image, rating, title, authors, issueYear, booking, bookedTill, view, search }) => {
  const { pathname } = useLocation();

  return (
    <article className={cn(style.book, view === 'grid' ? style.bookGrid : style.bookList)}>
      {image ? (
        <img
          src={`${BASE_URL}${image.url}`}
          className={style.img}
          alt={title}
          width={174}
          height={242}
          loading='lazy'
        />
      ) : (
        <NoImg classes={style.noImg} classesImg={style.noImgSvg} />
      )}
      <div className={style.cardBody}>
        <div className={style.rating}>
          {typeof rating === 'number' ? (
            <Rating rating={rating} />
          ) : (
            <span className={style.notRating}>ещё нет оценок</span>
          )}
        </div>
        <h3 className={style.title}>
          <Link to={`${pathname}/${id}`} className={style.titleText}>
            <Highlighter searchWords={[search]} autoEscape={true} textToHighlight={title} highlightTag={Highlight} />
          </Link>
        </h3>
        <div className={style.author}>
          <span className={style.authorText}>
            {authors.map((author) => author)}, {issueYear}
          </span>
        </div>
        <Button className={style.btn} isBooked={booking} bookedTill={bookedTill} />
      </div>
    </article>
  );
};
