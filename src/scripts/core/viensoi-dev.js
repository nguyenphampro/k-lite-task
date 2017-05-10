if (VIENSOI_APP.DEV_MODE) {
    $('body').append('<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">')
        .append('<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>')
}

(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({ handle: "", cursor: "move" }, opt);

        if (opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.find('.header-devtools').css('cursor', opt.cursor).on("mousedown", function(e) {
            if (opt.handle === "") {
                var $drag = $(this).parent().addClass('draggable');
            } else {
                var $drag = $(this).parent().addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 99999).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if (opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

if (VIENSOI_APP.DEV_MODE) {

    $('.devtools').drags();

    $(document).ready(function() {
        if ($('.viensoi-develop .devtools').length) {
            var devtls = $('.viensoi-develop .devtools').find('.body-devtools button')
            devtls.click(function() {
                if ($(this).attr('data-click-state') == 1) {
                    $(this).attr('data-click-state', 0)
                    $('body').toggleClass('active')
                    $('body').find('.devtool-gird').remove()
                } else {
                    $(this).attr('data-click-state', 1)
                    $('body').toggleClass('active')
                    $('body').append('<div class="devtool-gird"><div class="container d-flex"><div class="row d-flex align-items-stretch bd-highlight"><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div></div></div></div>')
                }
            });
        }
    });
}