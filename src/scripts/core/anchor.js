function setAnchor() {

    if (window.location.hash) {
        var target = $(window.location.hash);
        callAnchor(target)
    }

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                callAnchor(target)
                    // return false;
            }
        }
    });
}

function callAnchor(target) {
    var headerHeightAnchor = $("header").outerHeight();
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
}

$(document).ready(function() {
    setAnchor()
});

$(window).resize(function() {
    setAnchor()
})