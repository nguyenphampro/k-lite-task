function setHeader(e) {
    e >= VIENSOI_APP.ACTIVE_HEADER_POSITION ? $("header").addClass("active") : $("header").removeClass("active")
}

$(document).ready(function() {
    VIENSOI_APP.ACTIVE_FIXED_HEADER && $("header").addClass("fixedheader"), $(window).scrollTop() >= VIENSOI_APP.ACTIVE_HEADER_POSITION && setHeader($(window).scrollTop()), $("header").hasClass("fixedheader") && $("main").addClass("main-fixedheader");
});

// Fixed Header
$(window).scroll(function() {
    setHeader($(document).scrollTop());
});


//
$(document).ready(function() {
    VIENSOI_APP.ACTIVE_OFFCANVAS && $("body").on("click", function() {
        $("#VienSoiGlobalMenu .nav-item.active").each(function() {
            $("#VienSoiGlobalMenu .nav-item.active").find(".shown").removeClass("shown"), $("#VienSoiGlobalMenu .nav-item.active").removeClass("active")
        })
    });
})