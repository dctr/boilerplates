'use strict';

function Apple(type) {
  this._type = type;
  this._color = 'red';
}

Apple.prototype.getInfo = function getInfo() {
  return this.color + ' ' + this.type + ' apple';
};


// Creation with 'new'.
var myApple = new Apple('Braeburn');
console.log(myApple.getInfo());
// No private vars, prefix '_' is convention.
console.log(myApple._type);
