import { Link } from 'react-router-dom';
import cn from 'classnames';

import { NoImg } from '../no-img/no-img';
import { Rating } from '../rating/rating';

import style from './card-book.module.scss';

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

export const CardBook = ({ id, image, rating, title, author, year, isBooked, bookedTill, category, view }) => (
  <article className={cn(style.book, view === 'grid' ? style.bookGrid : style.bookList)}>
    {image ? (
      <img src={image} className={style.img} alt={title} width={174} height={242} />
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
        <Link to={`/books/${category}/${id}`} className={style.titleText}>
          {title}
        </Link>
      </h3>
      <div className={style.author}>
        <span className={style.authorText}>
          {author}, {year}
        </span>
      </div>
      <Button className={style.btn} isBooked={isBooked} bookedTill={bookedTill} />
    </div>
  </article>
);
