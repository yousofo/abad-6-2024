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
};