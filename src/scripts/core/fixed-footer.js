function setFooter() {
    var i = $("body").outerHeight(),
        t = $("header").outerHeight(),
        e = $("footer").outerHeight(),
        h = ($("main").outerHeight(), i - (t + e)),
        n = i - e;
    $(window).width() > VIENSOI_APP.DISPLAY_FOOTER ? $(window).width() <= VIENSOI_APP.CHANGE_GRID ? $("main").css("min-height", n + "px") : VIENSOI_APP.ACTIVE_FIXED_HEADER ? $("main").css("min-height", n + "px") : $("main").css("min-height", h + "px") : $("main").css("min-height", "initial")
}

$(document).ready(function() {
    if (VIENSOI_APP.ACTIVE_FIXED_FOOTER) {
        setFooter()
    }
});

$(window).resize(function() {
    if (VIENSOI_APP.ACTIVE_FIXED_FOOTER) {
        setFooter()
    }
})