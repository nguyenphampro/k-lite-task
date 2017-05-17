function VienSoiResponsive() {
    $("[bg-img]").each(function() {
        var i = $(this).attr("bg-img");
        $(this).css({
            "background-image": "url(" + i + ")",
            "background-position": "center center",
            "background-size": "cover"
        })
    }), $("[bg-img-responsive]").each(function() {
        var i = $(this).attr("bg-img-responsive"),
            s = $(this).attr("bg-img-responsive-sm"),
            r = $(this).attr("bg-img-responsive-xs");
        $(window).width() >= VIENSOI_APP.CHANGE_GRID ? $(this).css({
            "background-image": "url(" + i + ")",
            "background-position": "center center",
            "background-size": "cover"
        }) : $(window).width() < VIENSOI_APP.CHANGE_GRID && $(window).width() > 600 ? $(this).css({
            "background-image": "url(" + s + ")",
            "background-position": "center center",
            "background-size": "cover"
        }) : $(this).css({
            "background-image": "url(" + r + ")",
            "background-position": "center center",
            "background-size": "cover"
        })
    }), $("[img-src-responsive]").each(function() {
        var i = $(this).attr("img-src-responsive"),
            s = $(this).attr("img-src-responsive-sm"),
            r = $(this).attr("img-src-responsive-xs");
        $(window).width() >= VIENSOI_APP.CHANGE_GRID ? $(this).attr("src", "" + i) : $(window).width() < VIENSOI_APP.CHANGE_GRID && $(window).width() > 600 ? $(this).attr("src", "" + s) : $(this).attr("src", "" + r)
    })
}

$(function() {
    if (VIENSOI_APP.ACTIVE_RESPONSIVE) {
        VienSoiResponsive();
    }
})

$(window).resize(function() {
    if (VIENSOI_APP.ACTIVE_RESPONSIVE) {
        VienSoiResponsive();
    }
})