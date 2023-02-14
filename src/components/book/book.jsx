import { useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import bookImg from '../../assets/img/book.jpg';
import iconArrow from '../../assets/img/svg/icon-arrow-re.svg';
import userReviewImg from '../../assets/img/user-review.jpg';
import { bookMoreInfo } from '../../consts/book-more-info';
import { bookReviews } from '../../consts/book-reviews';
import { NoImg } from '../no-img/no-img';
import { Rating } from '../rating/rating';
import { Slider } from '../swiper/swiper';

import style from './book.module.scss';

export const Book = ({ title }) => {
  const [isReviewsOpen, setReviewsOpen] = useState(false);
  const { bookId } = useParams();

  const onReviews = () => {
    setReviewsOpen(!isReviewsOpen);
  };

  return (
    <div className='bookPage'>
      <article className='about'>
        <div className={style.mainInfo}>
          <div className={style.booImg}>
            {bookId === '1' && <NoImg classes={style.noImg} classesImg={style.noImgSvg} data-test-id='slide-big' />}
            {bookId === '2' && <img className={style.booImgOne} src={bookImg} alt='book' data-test-id='slide-big' />}
            {bookId === '3' && <Slider />}
          </div>
          <h1 className={style.heading}>{title}</h1>
          <span className={style.author}>Адитья Бхаргава, 2019</span>
          <button type='button' className={style.btn}>
            Забронировать
          </button>

          <section className={style.description}>
            <h2 className={style.headingX3}>О книге</h2>
            <div className={style.descriptionText}>
              <p>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время?
              </p>
              <p>
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                алгоритмы — это веселое и увлекательное занятие.
              </p>
            </div>
          </section>
        </div>

        <section className={cn(style.rating, style.section)}>
          <h2 className={style.headingX2}>Рейтинг</h2>
          <div className={style.ratingBody}>
            <div className={style.ratingStars}>
              <Rating rating={3} />
            </div>
            <div className={style.ratingCounter}>4.3</div>
          </div>
        </section>

        <section className={cn(style.moreInfo, style.section)}>
          <h2 className={style.headingX2}>Подробная информация</h2>
          <ul className={style.moreInfoBody}>
            {bookMoreInfo.map(({ id, label, text }) => (
              <li key={id} className={style.infoItem}>
                <span className={style.infoLabel}>{label}</span>
                <span className={style.infoText}>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={cn(style.reviews, style.section, isReviewsOpen && style.reviewsHide)}>
          <h2 className={style.headingX2}>
            Отзывы <span className={style.headingCounter}>2</span>
            <button type='button' className={style.btnDisplay} data-test-id='button-hide-reviews' onClick={onReviews}>
              <img src={iconArrow} alt='' />
            </button>
          </h2>

          <ul className={style.reviewsList}>
            {bookReviews.map(({ id, name, date, rating, text }) => (
              <li key={id} className={style.reviewsItem}>
                <div className={style.reviewHeader}>
                  <img src={userReviewImg} alt='' className={style.reviewImg} width={32} height={32} />
                  <span className={style.reviewName}>{name}</span>
                  <span className={style.reviewDate}>{date}</span>
                </div>
                <div className={style.reviewsStars}>
                  <Rating rating={rating} />
                </div>
                {text && (
                  <div className={style.reviewsBody}>
                    <p>{text}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button type='button' className={style.reviewsBtn} data-test-id='button-rating'>
            оценить книгу
          </button>
        </section>
      </article>
    </div>
  );
};
