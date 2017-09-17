'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ensureDirectoryExistence(filePath) {
  var dirname = _path2.default.dirname(filePath);
  if (_fs2.default.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  _fs2.default.mkdirSync(dirname);
}

exports.default = function(_ref) {
  var templatePath = _ref.templatePath,
    destinationPath = _ref.destinationPath,
    data = _ref.data,
    config = _ref.config;

  var processedSrcPath = _handlebars2.default.compile(templatePath)(data);
  var processedDestPath = _handlebars2.default.compile(destinationPath)(data);
  var text = _fs2.default.readFileSync(
    _path2.default.resolve(__dirname, 'templates', processedSrcPath),
    { encoding: 'utf-8' }
  );
  var compiled = _handlebars2.default.compile(text)(data);
  var fullDestPath = _path2.default.resolve(
    process.cwd(),
    config.sourcesRoot,
    processedDestPath
  );
  ensureDirectoryExistence(fullDestPath);
  _fs2.default.writeFileSync(fullDestPath, compiled);
};
