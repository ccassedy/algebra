
var util = require('util');

var Matrix = require('../Matrix.js');

function RealMatrix() {
  var self = this;

//-----------------------------------------------------------------------------

  Matrix.call(self, arguments);

//-----------------------------------------------------------------------------

};

//-----------------------------------------------------------------------------

util.inherits(RealMatrix, Matrix);

//-----------------------------------------------------------------------------

module.exports = Matrix;
