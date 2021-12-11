$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $("#footer-box").offset().top},
        'slow');
});