(function(global) {
  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.DataImage) {
    fabric.warn('fabric.DataImage is already defined.');
    return;
  }

  fabric.DataImage = fabric.util.createClass(fabric.Image, {
    type: 'dataImage',

    initialize: function (element, options, data) {
      this.callSuper('initialize', element, options);
      this.data = data;
    },

    toObject: function () {
      return fabric.util.object.extend(
        this.callSuper('toObject'),
        {data: this.data}
      );
    }
  });

  fabric.DataImage.fromURL = function (url, callback, imgOptions, data) {
    fabric.util.loadImage(
      url,
      function (img) {
        callback(new fabric.DataImage(img, imgOptions, data));
      },
      null,
      imgOptions && imgOptions.crossOrigin
    );
  };

})(typeof exports !== 'undefined' ? exports : this);
