import Swiper from "./swiper-bundle.esm.browser.min.js";

const swiper1 = new Swiper(".swiper1", {
  loop: true,
  speed: 700,
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper1-next',
    prevEl: '.swiper1-prev',
  },
  // breakpoints: {
  //   640: {
  //     spaceBetween: 50,
  //   }
  // },
});