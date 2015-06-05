// IIFE (pronounced iffy) - Immediately-invoked function expression
(function (global) {
  // Strict mode!
  'use strict';

  // Variable declaration = first statement after use strict.
  var foo,
    i,
    max,
    baka;


  for (i = 0, max = myarr.length; i < max; i += 1) {

  }

  // Application logic
  foo = 'bar';
  baka = 'baz';

// 'this' on a top-level iffy equals the global object (window in browser, export in NodeJS, ...).
}(this));
