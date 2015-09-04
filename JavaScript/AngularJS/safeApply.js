/*global angular */
/**
 * @description
 * If a function call fn() is not caused by an AngulaJS-aware action,
 * $scope.$apply(fn) has to be called to apply the changes to the DOM instead.
 * If you call $scope.$apply(fn) while AngularJS' digest
 * or apply is in progress, an exception is raised.
 * So, if a function can be called from either context, you first have to check,
 * whether we are AngularJS-aware at the moment or not.
 * This module capsules that functionality.
 * @ngdoc service
 * @name dctr.safeApply
 * @param {function} fn The function to safe-apply.
 * @requires $rootScope
 */
angular.module('dctr').factory('safeApply', [
  '$rootScope',
  function toolsProvider($rootScope) {
    'use strict';

    var safeApply;

    safeApply = function safeApply(fn) {
      var phase = $rootScope.$$phase;

      if (phase !== '$apply' && phase !== '$digest') {
        $rootScope.$apply(fn);
      } else {
        fn && fn();
      }

    };

    return safeApply;
  }

]);
