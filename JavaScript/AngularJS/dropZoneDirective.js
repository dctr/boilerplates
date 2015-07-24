/*global angular */
/**
 * Small directive to make an HTML element a valid drop zone
 *
 * Through `<tag drop-zone />` the tag just gets a valid dropzone.
 * Through `<tag drop-zone="myFunc" />` a function by the name of 'myFunc' which
 * has to be available on the current scope will be registered as the handler
 * for the 'drop' event.
 */
(function () {
  'use strict';

  var allowDropOnDragOverEvent,
    dropZoneDirective;

  allowDropOnDragOverEvent = function (e) {
    e.preventDefault();
    return false;
  };

  dropZoneDirective = angular.module(
    'standBuilder.dropZoneDirective',
    []
  );

  dropZoneDirective.directive('dropZone', function () {
    return function (scope, element, attrs) {
      element.on('dragover', allowDropOnDragOverEvent);
      if (attrs.dropZone && (typeof scope[attrs.dropZone] === 'function')) {
        element.on('drop', scope[attrs.dropZone]);
      }
    };
  });
}());
