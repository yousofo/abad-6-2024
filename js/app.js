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
    updateFilterUI()
    if ($(".courses-preview-mode.active").data("mode") == "cards") {
      $(".courses-rows").hide(0)
      $(".courses-cards").show(300)
    } else {
      $(".courses-cards").hide(0)
      $(".courses-rows").show(300)
    }
  })


  //replace course row with course card
  function rowToCard(courseType, courseName, courseStartData, courseTime) {
    return `
      <figure data-type=${courseType} class="course-card">
      <div class="img">
        <img src="/media/abad-course-card.png" alt="">
      </div>
      <figcaption>
        <h4>${courseName}</h4>
        <div class="course-date">
          <div>
            <img src="/media/calendar.png" alt="">
            <p>${courseStartData}</p>
          </div>
          <div>
            <img src="/media/combo sape.png" alt="">
            <p>${courseTime}</p>
          </div>
        </div>
        <p>هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة</p>
        <div class="course-info">
          <p>البرمجة</p>
          <p>1500 ريال سعودي</p>
        </div>
      </figcaption>
    </figure>`;
  }

  //courses filter
  function updateFilterUI() {
    if (filterOptions.mode == "rows") {
      if (filterOptions.type == "all") {
        $(".courses-rows tbody").html(allDataRows)
      } else {
        const newData = allDataRows.filter((i, ele) => $(ele).data("type") == filterOptions.type)
        $(".courses-rows tbody").html(newData)
      }
    } else {
      if (filterOptions.type == "all") {
        const allDataCards = allDataRows.map((i,e) => {
          const currentRow = $(e)
          return rowToCard(currentRow.data("type"), currentRow.data("name"), currentRow.data("date"), currentRow.data("time"))
        })
        $(".courses-cards").html([...allDataCards])
      } else {
        const newData = allDataRows.filter((i, ele) => $(ele).data("type") == filterOptions.type)
        const allDataCards = newData.map((i,e) => {
          let currentRow = $(e)
          return rowToCard(currentRow.data("type"), currentRow.data("name"), currentRow.data("date"), currentRow.data("time"))
        })
        $(".courses-cards").html(...allDataCards)
      }

    }
    // 
    // if (filterOptions.mode == "cards") {

    //   if (filterOptions.type == "all") {
    //     $(".courses-cards").html(allDataCards)
    //   } else {
    //     const newData = allDataCards.filter((i, ele) => $(ele).data("type") == filterOptions.type)
    //     $(".courses-cards").html(newData)
    //   }
    // } else {
    //   if (filterOptions.type == "all") {
    //     $(".courses-rows tbody").html(allDataRows)
    //   } else {
    //     const newData = allDataRows.filter((i, ele) => $(ele).data("type") == filterOptions.type)
    //     $(".courses-rows tbody").html(newData)
    //   }
    // }
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
      //update ui
      updateFilterUI()
    })
  })

  //home video
  $("#playHomeVideo").on("click", (e) => {
    $("#playHomeVideo").hide()
    document.querySelector("#homeVideo").play()
  })

  //reviews swipe buttons
  const reviewsBtn = document.querySelectorAll('.reviewsBtn');

  reviewsBtn.forEach((e) => {
    e.addEventListener('click', () => {
      // Remove the class
      e.classList.remove('animate-review-btn');

      // Trigger reflow to restart the animation
      void e.offsetWidth;

      // Re-add the class
      e.classList.add('animate-review-btn');
    });
  })
};