$(document).ready(function() {

});
$(function() {
    $('.lazy').lazy({
        beforeLoad: function(element) {
            // called before an elements gets handled
        },
        afterLoad: function(element) {
            // called after an element was successfully handled
        },
        onError: function(element) {
            // called whenever an element could not be handled
        },
        onFinishedAll: function() {
            // called once all elements was handled
        }
    });
});