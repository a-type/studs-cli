import spawn from 'cross-spawn';
import generateIndex from './generateIndex';
import path from 'path';

const cwd = process.cwd();
const bin = path.resolve(cwd, 'node_modules/.bin/babel');

export default ({ config, args }) => {
  generateIndex({ config, args });
  const src = config.sourcesDirectory || 'src';
  const dest = config.buildDirectory || 'dist';
  spawn.sync(bin, ['--copy-files', '--out-dir', dest, src], {
    stdio: 'inherit',
  });
};
