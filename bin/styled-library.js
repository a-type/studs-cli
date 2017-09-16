#! /usr/bin/env node
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const styleguide = require('../scripts/styleguide');

const getConfig = require('../util/config');
const config = getConfig(args.config);

switch (args._[0]) {
  case 'styleguide': {
    if (args._[1] === 'build') {
      styleguide.build({ config, args });
    } else {
      styleguide.run({ config, args });
    }
    break;
  }
  default: {
    console.error(`Didn't recognize that command (${args._[0]})`);
  }
}
