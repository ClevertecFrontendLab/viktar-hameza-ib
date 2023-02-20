import React, { useState } from 'react';
import cn from 'classnames';

import iconArrow from '../../assets/img/svg/icon-arrow-re.svg';
import userReviewImg from '../../assets/img/user-review.jpg';
import { BASE_URL } from '../../consts/host';
import { NoImg } from '../no-img/no-img';
import { Rating } from '../rating/rating';
import { Slider } from '../swiper/swiper';

import style from './book.module.scss';

export const Book = ({
  images,
  title,
  authors,
  issueYear,
  description,
  rating,
  comments,
  publish,
  pages,
  cover,
  format,
  weight,
  ISBN,
  producer,
  categories,
}) => {
  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const onReviews = () => {
    setReviewsOpen(!isReviewsOpen);
  };

  const bookMoreInfo = [
    { label: 'Издательство', text: publish },
    { label: 'Год издания', text: issueYear },
    { label: 'Страниц', text: pages },
    { label: 'Переплёт', text: cover },
    { label: 'Формат', text: format },
    { label: 'Жанр', text: categories.map((item) => item) },
    { label: 'Вес', text: weight },
    { label: 'ISBN', text: ISBN },
    {
      label: 'Изготовитель',
      text: producer,
    },
  ];

  return (
    <div className='bookPage'>
      <article className='about'>
        <div className={style.mainInfo}>
          <div className={style.booImg}>
            {images === null ? (
              <NoImg classes={style.noImg} classesImg={style.noImgSvg} data-test-id='slide-big' />
            ) : images.length >= 2 ? (
              <Slider images={images} />
            ) : (
              <img
                className={style.booImgOne}
                src={`${BASE_URL}${images[0].url}`}
                alt='book'
                data-test-id='slide-big'
              />
            )}
          </div>

          <h1 className={style.heading}>{title}</h1>
          <span className={style.author}>
            {authors.map((author) => author)}, {issueYear}
          </span>
          <button type='button' className={style.btn}>
            Забронировать
          </button>

          <section className={style.description}>
            <h2 className={style.headingX3}>О книге</h2>
            <div className={style.descriptionText}>
              <p>{description}</p>
            </div>
          </section>
        </div>

        <section className={cn(style.rating, style.section)}>
          <h2 className={style.headingX2}>Рейтинг</h2>
          <div className={style.ratingBody}>
            {rating ? (
              <React.Fragment>
                <div className={style.ratingStars}>
                  <Rating rating={rating} />
                </div>
                <div className={style.ratingCounter}>{rating}</div>
              </React.Fragment>
            ) : (
              <span className={style.ratingText}>ещё нет оценок</span>
            )}
          </div>
        </section>

        <section className={cn(style.moreInfo, style.section)}>
          <h2 className={style.headingX2}>Подробная информация</h2>
          <ul className={style.moreInfoBody}>
            {bookMoreInfo.map(({ label, text }) => (
              <li key={label} className={style.infoItem}>
                <span className={style.infoLabel}>{label}</span>
                <span className={style.infoText}>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={cn(style.reviews, style.section, isReviewsOpen && style.reviewsHide)}>
          <h2 className={style.headingX2}>
            Отзывы <span className={style.headingCounter}>{comments === null ? 0 : comments.length}</span>
            {comments && (
              <button type='button' className={style.btnDisplay} data-test-id='button-hide-reviews' onClick={onReviews}>
                <img src={iconArrow} alt='' />
              </button>
            )}
          </h2>

          <ul className={style.reviewsList}>
            {comments?.map(({ id, user, createdAt, text, rating: ratingUser }) => {
              const data = new Date(createdAt).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <li key={id} className={style.reviewsItem}>
                  <div className={style.reviewHeader}>
                    <img src={userReviewImg} alt='' className={style.reviewImg} width={32} height={32} />
                    <span className={style.reviewName}>
                      {user.firstName} {user.lastName}
                    </span>
                    <span className={style.reviewDate}>{data}</span>
                  </div>
                  <div className={style.reviewsStars}>
                    <Rating rating={ratingUser} />
                  </div>
                  {text && (
                    <div className={style.reviewsBody}>
                      <p>{text}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <button type='button' className={style.reviewsBtn} data-test-id='button-rating'>
            оценить книгу
          </button>
        </section>
      </article>
    </div>
  );
};
