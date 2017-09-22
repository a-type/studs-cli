const path = require('path');
const _ = require('lodash');

const cwd = process.cwd();

const defaultConfigLocation = path.resolve(cwd, 'studs.config.js');

const defaults = {
  styleguidistConfig: path.resolve(cwd, 'styleguide.config.js'),
  sourcesDirectory: 'src',
  buildDirectory: 'dist',
  componentsDirectory: '.',
};

module.exports = overrideLocation =>
  _.defaultsDeep(require(overrideLocation || defaultConfigLocation), defaults);
