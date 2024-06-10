import Swiper from "./swiper-bundle.esm.browser.min.js";

const swiper1 = new Swiper(".swiper1", {
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay:true,
  loopAddBlankSlides:true,
  navigation: {
    nextEl: '.swiper1-next',
    prevEl: '.swiper1-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },
});
const swiper2 = new Swiper(".swiper2", {
  speed: 700,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay:true,
  loopAddBlankSlides:true,
  breakpoints: {
    768: {
      // loop: false,
      // autoplay:false,
      slidesPerView: 5,
    }
  },
});