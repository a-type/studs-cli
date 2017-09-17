'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function(_ref) {
  var config = _ref.config;

  _inquirer2.default
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the element:',
        validate: function validate(value) {
          return /.+/.test(value) ? true : 'Name is required';
        },
      },
      {
        type: 'input',
        name: 'element',
        message: 'HTML element to extend',
        default: 'div',
      },
    ])
    .then(function(answers) {
      (0, _template2.default)({
        templatePath: 'element/Element.hb',
        destinationPath: 'elements/{{pascal name}}/{{pascal name}}.js',
        data: answers,
        config: config,
      });

      (0, _template2.default)({
        templatePath: 'element/index.hb',
        destinationPath: 'elements/{{pascal name}}/index.js',
        data: answers,
        config: config,
      });

      (0, _template2.default)({
        templatePath: 'element/Element.md.hb',
        destinationPath: 'elements/{{pascal name}}/{{pascal name}}.md',
        data: answers,
        config: config,
      });
    })
    .catch(console.error);
};
