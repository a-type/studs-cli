'use strict';

var spawn = require('cross-spawn');
var path = require('path');
var config = require('../util/config');

var cwd = process.cwd();
var defaultStyleguidistConfig = path.resolve(cwd, 'styleguide.config.js');
var bin = path.resolve(__dirname, '../node_modules/.bin/styleguidist');

module.exports = {
  run: function run(_ref) {
    var _ref$config$styleguid = _ref.config.styleguidistConfig,
        styleguidistConfig = _ref$config$styleguid === undefined ? defaultStyleguidistConfig : _ref$config$styleguid;

    console.info('Starting a Styleguidist server');

    spawn.sync(bin, ['server', '--config ' + styleguidistConfig], {
      stdio: 'inherit'
    });
  },
  build: function build(_ref2) {
    var _ref2$config$stylegui = _ref2.config.styleguidistConfig,
        styleguidistConfig = _ref2$config$stylegui === undefined ? defaultStyleguidistConfig : _ref2$config$stylegui;

    console.info('Compiling styleguide');

    spawn.sync(bin, ['build', '--config ' + styleguidistConfig], {
      stdio: 'inherit'
    });
  }
};