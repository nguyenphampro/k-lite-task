function setFooter() {
    var bodyHeight = $("body").outerHeight(),
        headerHeight = $("header").outerHeight(),
        footerHeight = $("footer").outerHeight(),
        mainHeight = $("main").outerHeight(),
        curentHeight = mainHeight + headerHeight + footerHeight,
        curentfixedHeight = mainHeight + footerHeight,
        newHeight = bodyHeight - (headerHeight + footerHeight),
        newfixedHeight = bodyHeight - footerHeight;
    if ($(window).width() > 600) {
        if ($(window).width() <= VIENSOI_APP.CHANGE_GRID) {
            $("main").css('min-height', newfixedHeight + 'px')
        } else {
            if (!VIENSOI_APP.ACTIVE_FIXED_HEADER) {
                $("main").css('min-height', newHeight + 'px')
            } else {
                $("main").css('min-height', newfixedHeight + 'px')
            }
        }
    } else {
        $("main").css('min-height', 'initial')
    }
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