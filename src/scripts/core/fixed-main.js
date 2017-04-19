function setMain() {
    var
        headerHeight = $("header").outerHeight();
    if ($(window).width() <= VIENSOI_APP.CHANGE_GRID) {
        $("main").css('padding-top', headerHeight + 'px')
    } else {
        if (!VIENSOI_APP.ACTIVE_PADDING_MAIN) {
            if (!VIENSOI_APP.ACTIVE_FIXED_HEADER) {
                $("main").css('padding-top', 'initial')
            } else {
                $("main").css('padding-top', headerHeight + 'px')
            }
        } else {
            $("main").css('padding-top', '0px')
        }
    }
}

$(document).ready(function() {
    setMain()
});

$(window).resize(function() {
    setMain()
})