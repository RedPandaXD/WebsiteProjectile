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
});
