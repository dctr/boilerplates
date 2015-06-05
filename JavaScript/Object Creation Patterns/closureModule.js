'use strict';

var apple = function apple(pType) {
  var color,
    getInfo,
    type;

  color = 'red';
  type = pType;

  getInfo = function getInfo() {
    return color + ' ' + type + ' apple';
  };

  return {
    getInfo: getInfo
  };
};


// Creation through object-creating function.
var myApple = apple('Braeburn');
console.log(myApple.getInfo());
// Vars in closure are not accessable.
//console.log(myApple.type);
