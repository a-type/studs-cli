'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

var _generateIndex = require('./generateIndex');

var _generateIndex2 = _interopRequireDefault(_generateIndex);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();
var bin = _path2.default.resolve(cwd, 'node_modules/.bin/babel');

exports.default = function (_ref) {
  var config = _ref.config,
      args = _ref.args;

  (0, _generateIndex2.default)({ config: config, args: args });
  var src = config.sourcesRoot || 'src';
  var dest = config.buildRoot || 'dist';
  _crossSpawn2.default.sync(bin, ['--copy-files', '--out-dir', dest, src], {
    stdio: 'inherit'
  });
};