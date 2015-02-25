function init() {
  // All our toggler functionality goes here
  var $toggleLinks = $(".detail_toggle");
  $toggleLinks.click(function(event) {
    var $detail = $(this).siblings(".detail");
    // the rest of our handler goes here
    $detail.toggleClass("hidden");
    $(this).text("Hide Details");
    event.preventDefault();
  });
};

$(function() {
  init();
});


