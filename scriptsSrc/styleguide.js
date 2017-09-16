const spawn = require('cross-spawn');
const path = require('path');
const config = require('../util/config');

const cwd = process.cwd();
const defaultStyleguidistConfig = path.resolve(cwd, 'styleguide.config.js');
const bin = path.resolve(__dirname, '../node_modules/.bin/styleguidist');

module.exports = {
  run({ config: { styleguidistConfig = defaultStyleguidistConfig } }) {
    console.info('Starting a Styleguidist server');

    spawn.sync(bin, ['server', `--config ${styleguidistConfig}`], {
      stdio: 'inherit',
    });
  },

  build({ config: { styleguidistConfig = defaultStyleguidistConfig } }) {
    console.info('Compiling styleguide');

    spawn.sync(bin, ['build', `--config ${styleguidistConfig}`], {
      stdio: 'inherit',
    });
  },
};
