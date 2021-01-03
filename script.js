$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination:false
    });
    var typed  = new Typed(".typed", {
    strings: ['     ','Student','Innovation','Builder'],
    typeSpeed: 100,
    loop: true,
    loopDelay: 2000,
    showCursor: false
  });
  $("[data-fancybox]").fancybox();


$(".items").isotope( {
    filter: '*',
    animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
    }
});
$("#filters a").click(function() {

$("#filters .current").removeClass("current");
$(this).addClass("current");

var selector = $(this).attr("data-filter");

$(".items").isotope({
  filter: selector,
  animationOptions: {
    duration: 1500,
    easing: 'linear',
    queue: false
  }
});

return false;
});

});
