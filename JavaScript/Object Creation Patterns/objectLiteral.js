'use strict';

var myApple = {
  type: 'macintosh',
  color: 'red',
  getInfo: function () {
    return this.color + ' ' + this.type + ' apple';
  }
};


// Object was created by writing it down directly.
console.log(myApple.getInfo());
console.log(myApple.type);
