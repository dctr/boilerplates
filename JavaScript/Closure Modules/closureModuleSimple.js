/**
 * Closure Module (simple, only non-static content)
 *
 * This boilerplate sketches module creation through a simple closure.
 * It features private and public non-static content.
 */
GLOBAL.MYAPP.MYMODULE = function (spec) {
  'use strict';

  // # variable declaration
  var privateElementFromParam,
    privateElement,
    publicElement;

  // # validate input
  privateElementFromParam = spec.param || 'default';

  // # private variable initialization
  privateElement = 'var of function';

  // # public variable initialization
  publicElement = 'var or function';

  return {
    publicElement: publicElement
  };
};