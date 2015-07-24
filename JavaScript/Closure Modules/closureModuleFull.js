/**
 * Closure Module (including export and static content)
 *
 * This boilerplate samples a module with static, non-static, private, and
 * public content as well as global registration through double closure.
 * The outer function encapsules the statics along with the registration of the
 * module to a global container (node.js, require.js, or window).
 * The inner function represents the constructor that is available under the
 * module's name and encapsules the non-statics.
 *
 * Please replace MYMODULE and MYAPP.
 *
 * @author David Christ <david.christ@genitopia.org>
 * @version 0.2
 */
;(function () {
  'use strict';

  // # module's constructor function and static variable declaration
  var constructor,
    privateStatic,
    publicStatic;

  // # private static variable initialization
  privateStatic = 'var or function';

  // # module's constructor function initialization
  constructor = function constructorF(spec, optionalSuperConstructor) {
    // # constructor's created object and non-static variable declaration
    var that,
      privateNonStaticFromParam,
      privateNonStatic,
      publicNonStatic;

    // # validate input
    privateNonStaticFromParam = spec.param || 'default';

    // # private variable initialization
    privateNonStatic = 'var of function';

    // # constructor's created object
    // ## ... plain empty new object
    that = {};
    // ## ... with suppliable super constructor
    that = (optionalSuperConstructor && optionalSuperConstructor(spec)) || {};
    // ## ... with hard-coded super constructor
    that = GLOBAL.MYAPP.super(spec);

    // # public variable initialization
    publicNonStatic = 'var or function';

    // # public variable registration
    that.publicNonStatic = publicNonStatic;

    return that;
  };

  // # public static variable initialization
  publicStatic = 'var or function';

  // # public static variable registration
  constructor.publicStatic = publicStatic;

  // # module exporting
  // To Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = constructor;
  // To AMD / Require.js
  } else if (typeof define !== 'undefined' && define.amd) {
    define(MYMODULE, [], function () { return constructor; });
  // To browser's global object
  } else {
    window.MYAPP.MYMODULE = constructor;
  }

}());