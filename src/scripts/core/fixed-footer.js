function setFooter() {
    var bodyHeight = $("body").outerHeight(),
        headerHeight = $("header").outerHeight(),
        footerHeight = $("footer").outerHeight(),
        mainHeight = $("main").outerHeight(),
        curentHeight = mainHeight + headerHeight + footerHeight,
        curentfixedHeight = mainHeight + footerHeight,
        newHeight = bodyHeight - (headerHeight + footerHeight),
        newfixedHeight = bodyHeight - (headerHeight + footerHeight);
    if (VIENSOI_APP.ACTIVE_FIXED_FOOTER && !VIENSOI_APP.ACTIVE_FIXED_HEADER) {
        if (curentHeight < bodyHeight) {
            $("main").css('height', newHeight + 'px')
        }
    } else {
        if (curentfixedHeight < bodyHeight) {
            $("main").css('height', newfixedHeight + 'px')
        }
    }
}

$(document).ready(function() {
    setFooter()
});