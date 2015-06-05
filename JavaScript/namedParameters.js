'use strict';

// > 3 parameters => use specification object
var blubber = function blubber(spec) {
  var internalSpec;

  // If no spec object was provided, use an empty one.
  spec = spec || {};

  // Use values from spec object, use default if a value is not present.
  internalSpec.alpha = spec.alpha || 1;
  internalSpec.red = spec.red || 0;
  internalSpec.green = spec.green || 0;
  internalSpec.blue = spec.blue || 0;

  // Logic with colors
};


// Use defaults for alpha and green.
blubber({
  red: 255,
  blue: 128
});
