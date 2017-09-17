'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

Object.keys(_changeCase2.default).forEach(function(casing) {
  _handlebars2.default.registerHelper(casing, _changeCase2.default[casing]);
});

exports.default = function(_ref) {
  var config = _ref.config,
    generator = _ref.generator;

  switch (generator) {
    case 'element':
      (0, _element2.default)({ config: config });
      break;
    default:
      console.error('Unknown generator ' + generator);
      break;
  }
};
