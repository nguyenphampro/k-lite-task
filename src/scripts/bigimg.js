
$(function () {

    // Set BG Resposive 
    $('[bg-img]').each(function () {
        var bgimg = $(this).attr('bg-img');
        $(this).css({
            "background-image": "url(" + bgimg + ")",
            "background-position": "center center",
            "background-size": "cover"
        });
    });

    $('[bg-img-responsive]').each(function () {
        var bgimg = $(this).attr('bg-img-responsive');
        var bgimgsm = $(this).attr('bg-img-responsive-sm');
        var bgimgxs = $(this).attr('bg-img-responsive-xs');
        if ($(window).width() >= 1000) {
            $(this).css({
                "background-image": "url(" + bgimg + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else if ($(window).width() < 1000 && $(window).width() > 600) {
            $(this).css({
                "background-image": "url(" + bgimgsm + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else {
            $(this).css({
                "background-image": "url(" + bgimgxs + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        }
    });

    $('[img-src-responsive]').each(function () {
        var bgimg = $(this).attr('img-src-responsive');
        var bgimgsm = $(this).attr('img-src-responsive-sm');
        var bgimgxs = $(this).attr('img-src-responsive-xs');
        if ($(window).width() >= 1200) {
            $(this).attr({
                "src": "" + bgimg + ""
            });
        } else if ($(window).width() < 1200 && $(window).width() > 500) {
            $(this).attr({
                "src": "" + bgimgsm + ""
            });
        } else {
            $(this).css({
                "src": "" + bgimgxs + ""
            });
        }
    });

});
