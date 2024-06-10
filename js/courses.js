window.onload = function () {
  //dual slider
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("ريال سعودي" + ui.values[0] + " - ريال سعودي" + ui.values[1]);
    }
  });
  $("#amount").val("ريال سعودي" + $("#slider-range").slider("values", 0) +
    " - ريال سعودي" + $("#slider-range").slider("values", 1));


    
  //toggle nav list
  $(".toggle-nav-list").on("click", () => {
    $(".nav-list").toggle()
    console.log("hi")
  })
};