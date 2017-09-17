#! /usr/bin/env node
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const styleguide = require('../scripts/styleguide').default;
const build = require('../scripts/build').default;
const generate = require('../scripts/generate').default;

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
  case 'build': {
    build({ config, args });
    break;
  }
  case 'generate': {
    generate({ config, args, generator: args._[1] });
    break;
  }
  default: {
    console.error(`Didn't recognize that command (${args._[0]})`);
  }
}
