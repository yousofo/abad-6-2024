const filterOptions = {
  mode: "rows",
  type: "all"
}
const allDataRows = $(".courses-rows tbody tr")
const allDataCards = $(".courses-cards figure")

window.onload = function () {
  //dual slider
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 100,
    values: [15, 85],
    slide: function (event, ui) {
      $("#amount").val("ريال سعودي" + ui.values[0] + " - ريال سعودي" + ui.values[1]);
    }
  });
  $("#amount").val("ريال سعودي" + $("#slider-range").slider("values", 0) +
    " - ريال سعودي" + $("#slider-range").slider("values", 1));



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
};