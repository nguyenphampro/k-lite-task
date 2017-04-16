// Anchor link
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if ($(window).width() < 1000) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 500);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                }
                return false;
            }
        }
    });
});

const LOGOMAIN = '<?xml version="1.0" encoding="utf-8"?><!-- Coding bay Bao Nguyen - 0969689893 --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 295.6 132.1" enable-background="new 0 0 295.6 132.1" xml:space="preserve"><g id="labs"><path fill="#000000" d="M26,80.1l-4-10.8l21.9-26.4h10v27.2h6v10h-6v8h-10v-8L26,80.1L26,80.1z M33.2,70.1h10.7V57.4L33.2,70.1z"/><g><polygon fill="#000000" points="151.5,35.4 141.8,35.4 141.8,88.8 173.1,88.8 173.1,79.4 151.5,79.4 "/><path fill="#000000" d="M205.6,51.4c-2.9-2.6-6.8-3.9-12-3.9c-3.3,0-6.1,0.4-8.6,1.3c-2.3,0.8-5,2.2-7.7,4l-1.6,1l4.3,7.5l1.8-1.2c3.8-2.6,7.3-3.9,10.7-3.9c2.6,0,4.7,0.6,6.1,1.8c1.2,1.1,1.8,2.7,1.8,4.9v0.2h-10.2c-4.9,0-8.7,1.1-11.5,3.3c-3,2.3-4.5,5.4-4.5,9.3c0,2.4,0.6,4.7,1.9,6.8c1.1,2,2.8,3.6,5.2,4.9c2.2,1.1,4.7,1.7,7.5,1.7c4.8,0,8.8-1.2,11.9-3.5v3.2h9.4L210,62.2C209.9,57.5,208.4,54,205.6,51.4z M196.9,78.4c-2.1,1.3-4.3,1.9-6.9,1.9c-2.1,0-3.7-0.4-5-1.4c-1.1-0.8-1.5-1.9-1.5-3.3c0-1.2,0-4,7.4-4h9.5v2.1C199.8,75.6,198.7,77.2,196.9,78.4z"/><path fill="#000000" d="M250.6,50.1L250.6,50.1c-3.1-1.8-6.5-2.7-10.2-2.7c-3.6,0-6.7,0.8-9.6,2.4c-1,0.6-1.9,1.2-2.7,2V32.4h-9.5v56.4h9.5v-4.2c0.8,0.7,1.8,1.4,2.7,1.9c2.7,1.7,5.9,2.5,9.7,2.5s7.3-0.9,10.3-2.7c2.8-1.6,5.3-4.2,7-7.4c1.6-3,2.4-6.6,2.4-10.6c0-3.9-0.8-7.4-2.5-10.7C256,54.4,253.7,51.9,250.6,50.1z M233.4,58c1.7-1,3.6-1.5,5.9-1.5c2.2,0,4.1,0.5,5.8,1.5c1.8,1.1,3.1,2.4,4,4.1c1,1.9,1.5,3.9,1.5,6.2s-0.5,4.3-1.5,6.2c-0.9,1.7-2.2,3.1-4,4.1c-1.6,1-3.6,1.5-5.8,1.6c-2.3,0-4.2-0.5-5.9-1.5c-1.8-1.1-3.1-2.4-4-4.1c-1-1.9-1.5-4-1.5-6.3c0-2.2,0.5-4.3,1.5-6.2C230.4,60.4,231.7,59,233.4,58z"/><path fill="#000000" d="M290.5,69.5c-1.4-1.6-3-2.9-4.8-3.8c-1.7-0.8-3.8-1.6-6.6-2.4H279c-1.8-0.4-3.2-0.9-4.3-1.4l-0.1-0.1c-0.8-0.3-1.4-0.7-2.1-1.3c-0.3-0.3-0.5-0.8-0.5-1.4c0-0.9,0.3-1.6,1-2c1-0.6,2.4-0.9,4.3-0.9c1.4,0,2.9,0.2,4.7,0.7c1.5,0.4,3,1.1,4.4,2l1.9,1.2l3.8-7.9l-1.3-1c-1.6-1.2-3.6-2.1-6-2.8c-2.5-0.7-5.1-1-7-1.1c-4.2,0-7.6,0.9-10.4,2.8c-3,2.1-4.6,5.2-4.6,9.3c0,2.6,0.7,4.8,2.2,6.7c1.4,1.6,2.9,2.8,4.7,3.6c1.7,0.8,3.9,1.6,6.5,2.4c2.1,0.6,4.7,1.5,6.1,2.4c0.8,0.5,1.2,1.2,1.2,2.3c0,1.1-0.4,1.9-1.3,2.4c-1.1,0.7-2.7,1.1-4.6,1.1c-2.1,0-4-0.4-6-1.2c-1.8-0.7-3.5-1.7-5.1-3l-1.9-1.7l-3.9,7.8l1.1,1c1.9,1.8,4.3,3.2,7.1,4.2c2.8,1,5.7,1.5,8.5,1.5c4.3,0,7.9-1,10.8-3.1c3.2-2.2,4.8-5.4,4.8-9.5C292.7,73.7,292,71.4,290.5,69.5z"/></g><polygon fill="#000000" points="86.4,57.7 75,42.7 62.4,42.7 80.1,65.9 63.3,88 76,88 86.4,74.2 96.8,88 109.4,88 92.6,65.9 119.7,30.4 119.7,120.1 11.7,120.1 11.7,12.1 108,12.1 115.5,2.1 1.7,2.1 1.7,130.1 129.7,130.1 129.7,2.1 "/></g></svg>';
$(function() {
    $('[site-logo]').html(LOGOMAIN);
});

console.log('%cVienSoi', 'font-size:100px;color:#000000;text-shadow:0 1px 0 #404040,0 2px 0 #404040 ,0 3px 0 #404040 ,0 4px 0 #404040 ,0 5px 0 #404040 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('%c VienSoi ' + '%c - Bringing price transparency to the millions of people and businesses exchanging currencies globally.', 'border-radius: 2px; padding: 3px; background: #000000; color: #FFF', 'color: #000000')
console.warn("VienSoi warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a 4xlabs feature or 'hack' someone's account, it is a scam and will give them access to your 4xlabs account.")