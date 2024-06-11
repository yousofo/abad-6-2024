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

const filterOptions = {
  mode: "rows",
  type: "all"
}
const allDataRows = $(".courses-rows tbody tr")
const allDataCards = $(".courses-cards figure")

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
  $(".courses-preview-mode").on("click", () => {
    $(".courses-preview-mode").toggleClass("active")
    filterOptions.mode = $(".courses-preview-mode.active").data("mode")
    updateFilterUI(filterOptions.type)
    if ($(".courses-preview-mode.active").data("mode") == "cards") {
      $(".courses-rows").hide(0)
      $(".courses-cards").show(300)
    } else {
      $(".courses-cards").hide(0)
      $(".courses-rows").show(300)
    }
  })

  //courses filter

  function updateFilterUI(current){
    if (filterOptions.mode == "cards") {
      if (current == "all") {
        $(".courses-cards").html(allDataCards)
      } else {
        const newData = allDataCards.filter((i, ele) => $(ele).data("filter") == filterOptions.type)
        $(".courses-cards").html(newData)
      }
    } else {
      if (current == "all") {
        $(".courses-rows tbody").html(allDataRows)
      } else {
        const newData = allDataRows.filter((i, ele) => $(ele).data("filter") == filterOptions.type)
        $(".courses-rows tbody").html(newData)
      }
    }
  }

  //select all list items and loop over them
  $(".courses-filter li").each((i, e) => {
    let current = $(e)
    let currentData = current.data("filter")
    //add click event listener to  each item
    current.on("click", () => {
      //remove active class from all siblings
      $(".courses-filter li").removeClass("active")
      //add class to the clicked element
      current.addClass("active")
      //add filter type info to filterOptions
      filterOptions.type = current.data("filter")
      //update ui based on which mode is active
      updateFilterUI(currentData)

    })
  })

};