import Swiper from 'swiper';
import 'swiper/css/bundle';

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 16,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 32,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
    },
  },
});
