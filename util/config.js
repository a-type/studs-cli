const path = require('path');

const cwd = process.cwd();

const defaultConfigLocation = path.resolve(cwd, 'styled-library.config.js');

module.exports = overrideLocation =>
  require(overrideLocation || defaultConfigLocation);
