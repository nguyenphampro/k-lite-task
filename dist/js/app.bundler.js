'use strict';

// Constructor

var Link = function Link() {
  this.name = 'Link';
  console.log('%s module', this.name);
};

module.exports = Link;

$(document).ready(function () {
  $(".echotext").html("This is Hello World by JQuery");
});
//# sourceMappingURL=app.bundler.js.map
