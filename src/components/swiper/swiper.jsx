import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HOST } from '../../consts/host';

import './swiper.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = ({ images }) => {
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
        {images.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <img src={`${HOST}${item.url}`} alt='' />
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
        {images.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i} data-test-id='slide-mini'>
            <img src={`${HOST}${item.url}`} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
