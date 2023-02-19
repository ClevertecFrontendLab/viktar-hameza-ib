import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { NoImg } from '../no-img/no-img';
import { Rating } from '../rating/rating';

import style from './card-book.module.scss';

const HOST = 'https://strapi.cleverland.by';

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

export const CardBook = ({ id, image, rating, title, authors, issueYear, booking, bookedTill, view }) => {
  const { pathname } = useLocation();

  return (
    <article className={cn(style.book, view === 'grid' ? style.bookGrid : style.bookList)}>
      {image ? (
        <img src={`${HOST}${image.url}`} className={style.img} alt={title} width={174} height={242} loading='lazy' />
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
            {title}
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
