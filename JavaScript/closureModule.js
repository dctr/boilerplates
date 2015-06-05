/*jslint browser: true, es5: true, indent: 2, node: true, nomen: true, todo: true */
/*global define, console */

/**
 * Module boilerplate.
 *
 * This boilerplate samples a module that provides a constructor function with
 * private variables through closure which is invoked without a new keyword.
 * In addition, it contains JSLint asignments following the author's
 * coding conventions.
 *
 * Please replace MODULENAME in the last line.
 *
 * @author David Christ <david.christ@uni-trier.de>
 * @version 0.1
 */
(function (modulename) {
  'use strict';

  var constructor;


  // -----
  // Private Static
  // ----------


  constructor = function (spec, superConstructor) {
    var that;

    // -----
    // Validate input
    // ----------


    // -----
    // Private non-static
    // ----------


    // -----
    // Public non-static
    // ----------

    that = (superConstructor && superConstructor(spec)) || {};

    return that;
  };


  // -----
  // Public Static
  // ----------


  // -----
  // Exporting
  // ----------

  // To Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = constructor;
  // To AMD / Require.js
  } else if (typeof define !== 'undefined' && define.amd) {
    define(modulename, [], function () { return constructor; });
  // To browser's global object
  } else {
    window[modulename] = constructor;
  }
}('MODULENAME'));