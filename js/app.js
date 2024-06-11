import Swiper from "./swiper-bundle.esm.browser.min.js";

const swiper1 = new Swiper(".swiper1", {
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: true,
  loopAddBlankSlides: true,
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
  autoplay: true,
  loopAddBlankSlides: true,
  breakpoints: {
    768: {
      // loop: false,
      // autoplay:false,
      slidesPerView: 5,
    }
  },
});
window.onload = function () {
  //toggle nav list
  document.onclick = () => $(".nav-list-drop").hide()
  $(".toggle-nav-list").on("click", (e) => {
    e.stopPropagation()
    $(".nav-list").addClass("nav-list-drop")
    $(".nav-list").on("click", (e) => e.stopPropagation())
    console.log(e.isDefaultPrevented())

    $(".nav-list").toggle(300)
    console.log("hi")
  })

  //toggle courses preview mode
  $(".courses-preview-mode").on("click",()=>{
    $(".courses-preview-mode").toggleClass("active")
    console.log($(".courses-preview-mode.active").data("mode"))
    if($(".courses-preview-mode.active").data("mode")=="cards"){
      console.log("cards")
      $(".courses-rows").hide(0)
      $(".courses-cards").show(300)
    }else{
      $(".courses-cards").hide(0)
      $(".courses-rows").show(300)
    }
  })
};