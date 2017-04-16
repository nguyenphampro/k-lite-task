function setHeader(elm) {
    if (elm >= 50) {
        $("header").addClass('active');
    } else {
        $("header").removeClass('active');
    }
}

$(document).ready(function() {
    if (VIENSOI_APP.ACTIVE_FIXED_HEADER) {
        $("header").addClass('fixedheader');
    }

    if ($(window).scrollTop() >= 50) {
        setHeader($(window).scrollTop());
    }
    if ($("header").hasClass("fixedheader")) {
        $("main").addClass('main-fixedheader');
    }
});

// Fixed Header
$(window).scroll(function() {
    setHeader($(document).scrollTop());
});