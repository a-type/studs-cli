import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export default ({ templatePath, destinationPath, data, config }) => {
  const processedSrcPath = handlebars.compile(templatePath)(data);
  const processedDestPath = handlebars.compile(destinationPath)(data);
  const text = fs.readFileSync(
    path.resolve(__dirname, 'templates', processedSrcPath),
    { encoding: 'utf-8' }
  );
  const compiled = handlebars.compile(text)(data);
  const fullDestPath = path.resolve(
    process.cwd(),
    config.sourcesRoot,
    processedDestPath
  );
  ensureDirectoryExistence(fullDestPath);
  fs.writeFileSync(fullDestPath, compiled);
};
