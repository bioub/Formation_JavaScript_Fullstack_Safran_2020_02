// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';
  
  var names = ['Jean', 'Eric', 'Pierre'];

  for (var i = 0; i < names.length; i++) {
    var n = names[i];
    console.log(hello(n));
  }
}());
