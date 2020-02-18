(function() {
  'use strict';
  function hello(name) {
    return 'Hello ' + name.toUpperCase() + ' !';
  }

  window.hello = hello;

}());
