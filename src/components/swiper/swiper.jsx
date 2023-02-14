import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bookImg from '../../assets/img/book.jpg';

import './swiper.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        data-test-id='slide-big'
        className='customSwiperSlider'
        spaceBetween={40}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        pagination={{
          el: '.customSwiperPagination',
          type: 'bullets',
          clickable: true,
        }}
      >
        {[...Array(5)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <img src={bookImg} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='customSwiperPagination' />
      <Swiper
        className='customSwiperThumbs'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={5}
        width={445}
        freeMode={true}
        centerInsufficientSlides={true}
        watchSlidesProgress={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
      >
        {[...Array(5)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide data-test-id='slide-mini' key={i}>
            <img src={bookImg} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
