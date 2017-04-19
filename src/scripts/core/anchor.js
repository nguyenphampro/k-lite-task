function setAnchor() {
    var headerHeightAnchor = $("header").outerHeight();
    var target2 = $(window.location.hash);
    if (window.location.hash) {
        console.log(window.location.hash)
        console.log(target2)
        if ($(window).width() <= VIENSOI_APP.CHANGE_GRID) {
            $('html, body').animate({
                scrollTop: target2.offset().top - headerHeightAnchor
            }, 500);
        } else {
            if (!VIENSOI_APP.ACTIVE_FIXED_HEADER) {
                $('html, body').animate({
                    scrollTop: target2.offset().top
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: target2.offset().top - headerHeightAnchor
                }, 500);
            }
        }
    }
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                if ($(window).width() <= VIENSOI_APP.CHANGE_GRID) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - headerHeightAnchor
                    }, 500);
                } else {
                    if (!VIENSOI_APP.ACTIVE_FIXED_HEADER) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 500);
                    } else {
                        $('html, body').animate({
                            scrollTop: target.offset().top - headerHeightAnchor
                        }, 500);
                    }
                }
                // return false;
            }
        }
    });
}

$(document).ready(function() {
    setAnchor()
});

$(window).resize(function() {
    setAnchor()
})