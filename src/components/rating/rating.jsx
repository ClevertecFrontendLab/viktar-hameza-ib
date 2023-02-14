import React from 'react';

import iconStar from '../../assets/img/svg/icon-star.svg';
import iconStarActive from '../../assets/img/svg/icon-star-active.svg';

export const Rating = ({ rating }) => {
  const arrStars = [];

  for (let i = 0; i < rating; i++) {
    arrStars.push(1);
  }

  if (typeof rating === 'number' && arrStars.length < 5) {
    for (let i = 0; arrStars.length !== 5; i++) {
      arrStars.push(0);
    }
  }

  return (
    <React.Fragment>
      {arrStars.map((item) => (
        <span key={`${rating}${Math.random().toFixed(5)}`}>
          <img src={item ? iconStar : iconStarActive} alt='' width={24} height={24} />
        </span>
      ))}
    </React.Fragment>
  );
};
