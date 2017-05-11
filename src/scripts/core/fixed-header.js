function setHeader(elm) {
    if (elm >= VIENSOI_APP.ACTIVE_HEADER_POSITION) {
        $("header").addClass('active');
    } else {
        $("header").removeClass('active');
    }
}

$(document).ready(function() {
    if (VIENSOI_APP.ACTIVE_FIXED_HEADER) {
        $("header").addClass('fixedheader');
    }

    if ($(window).scrollTop() >= VIENSOI_APP.ACTIVE_HEADER_POSITION) {
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


//
$(document).ready(function() {
    if (VIENSOI_APP.ACTIVE_OFFCANVAS) {
        $('body').on('click', function() {
            $('#VienSoiGlobalMenu .nav-item.active').each(function() {
                $('#VienSoiGlobalMenu .nav-item.active').find('.shown').removeClass('shown')
                $('#VienSoiGlobalMenu .nav-item.active').removeClass('active')
            });
        })
    }
})