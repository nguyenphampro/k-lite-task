function backToTop() {
    if ($("#back-to-top").length) {
        var o = function() {
            var o = $(window).scrollTop();
            o > VIENSOI_APP.DISPLAY_BACKTOTOP ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
        };
        o(), $(window).on("scroll", function() {
            o()
        }), $("#back-to-top").on("click", function(o) {
            o.preventDefault(), $("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
}

$(document).ready(function() {
    if (VIENSOI_APP.ACTIVE_BACKTOTOP) {
        backToTop()
    }
});