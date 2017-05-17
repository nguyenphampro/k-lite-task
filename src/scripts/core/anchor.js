function setAnchor() {
    if (window.location.hash) {
        var o = $(window.location.hash);
        callAnchor(o)
    }
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = $(this.hash);
            o = o.length ? o : $("[name=" + this.hash.slice(1) + "]"), o.length && callAnchor(o)
        }
    })
}

function callAnchor(o) {
    var t = $("header").outerHeight();
    $(window).width() <= VIENSOI_APP.CHANGE_GRID ? $("html, body").animate({
        scrollTop: o.offset().top - t
    }, 500) : VIENSOI_APP.ACTIVE_FIXED_HEADER ? $("html, body").animate({
        scrollTop: o.offset().top - t
    }, 500) : $("html, body").animate({
        scrollTop: o.offset().top
    }, 500)
}

$(document).ready(function() {
    setAnchor()
});

$(window).resize(function() {
    setAnchor()
})