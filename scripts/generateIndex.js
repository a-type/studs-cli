'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var posix = path.posix;

exports.default = function (_ref) {
  var sourcesRoot = _ref.config.sourcesRoot;

  var contents = ['\n  /**\n   * THIS IS A GENERATED FILE\n   *\n   * Please see /tools/generateIndices.js to regenerate after structural changes or component additions / deletions\n   */\n  '];
  var exportItems = [];

  var src = sourcesRoot || path.resolve(process.cwd(), 'src');

  var appendExports = function appendExports(dir, subDirs, files) {
    var relativeToSrc = posix.relative(src, dir);
    var dirName = dir.split(posix.sep).pop();
    if (files.includes('index.js') && dir !== src) {
      exportItems.push({ name: dirName, path: relativeToSrc });
    }

    files.forEach(function (fileName) {
      // skip non-javascript files
      if (fileName.split('.').pop() !== 'js') {
        return;
      }

      var name = fileName.replace('.js', '');
      // note: posix.resolve did not work correctly for this. Falling back to manual resolution.
      var relativeFilePath = relativeToSrc + posix.sep + name;
      if ((_.upperFirst(fileName) === fileName || ['theme', 'extensions'].includes(dirName) || name === 'icons') && name !== dirName) {
        exportItems.push({ name: name, path: relativeFilePath });
      }
    });
  };

  var walk = function walk(src) {
    var filenames = fs.readdirSync(src);
    var dirInfo = filenames.reduce(function (acc, name) {
      var filePath = posix.join(src, name);
      if (fs.statSync(filePath).isDirectory()) {
        acc.dirs.push(name);
      } else {
        acc.files.push(name);
      }

      return acc;
    }, { files: [], dirs: [] });

    appendExports(src, dirInfo.dirs, dirInfo.files);

    dirInfo.dirs.forEach(function (dir) {
      var absPath = posix.join(src, dir);
      walk(absPath);
    });
  };

  walk(src, appendExports);

  // validate exports
  var exportNames = exportItems.map(function (item) {
    return item.name;
  });
  var uniqueNames = _.uniq(exportNames);
  if (uniqueNames.length !== exportNames.length) {
    var duplicatedNames = [].concat(exportNames);
    uniqueNames.forEach(function (name) {
      return duplicatedNames.splice(duplicatedNames.indexOf(name), 1);
    });
    throw new Error('Exports do not have unique names. Check [' + duplicatedNames.join(', ') + '].');
  }
  if (exportNames.includes('default')) {
    throw new Error("You cannot name a file 'default'; please rename this file.");
  }

  exportItems.forEach(function (_ref2) {
    var name = _ref2.name,
        path = _ref2.path;

    contents.push('export { default as ' + name + ' } from \'./' + path + '\';');
  });

  fs.writeFileSync(path.resolve(src, 'index.js'), contents.join('\n'));
};