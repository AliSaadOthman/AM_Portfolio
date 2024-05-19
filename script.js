// script.js
$(document).ready(function () {
  // Collapse navbar on link click if navbar is expanded
  var collapseNavBar = function () {
    $(".navbar-collapse").collapse("hide");
  };

  $(".navbar-nav>li>a, .navbar-brand").click(collapseNavBar);

  // Collapse navbar when clicking outside of it
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.closest(".navbar").length) {
      $(".navbar-toggler").click();
    }
  });
});
