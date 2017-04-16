// Anchor link
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if ($(window).width() < 1000) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 500);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                }
                return false;
            }
        }
    });
});