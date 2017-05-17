function setMain() {
    var i = $("header").outerHeight();
    $(window).width() <= VIENSOI_APP.CHANGE_GRID ? $("main").css("padding-top", i + "px") : VIENSOI_APP.ACTIVE_PADDING_MAIN ? VIENSOI_APP.ACTIVE_FIXED_HEADER ? $("main").css("padding-top", i + "px") : $("main").css("padding-top", "initial") : $("main").css("padding-top", "0px")
}

$(document).ready(function() {
    setMain()
});

$(window).resize(function() {
    setMain()
})