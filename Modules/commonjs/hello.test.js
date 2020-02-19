// (function(exports, require, module, __filename, __dirname) {
  'use strict'

  // const hello = require('./hello').hello; si exports.hello = hello;
  const hello = require('./hello').default;

  console.log(hello('Romain'));

// });
