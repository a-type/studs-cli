'use strict';

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = function(plop) {
  plop.setGenerator('element', (0, _element2.default)(plop));
};
