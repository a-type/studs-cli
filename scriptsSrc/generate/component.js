import inquirer from 'inquirer';
import template from './template';
import path from 'path';

export default ({ config }) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the component:',
        validate: value => (/.+/.test(value) ? true : 'Name is required'),
      },
      {
        type: 'input',
        name: 'element',
        message: 'HTML element to extend',
        default: 'div',
      },
    ])
    .then(answers => {
      template({
        templatePath: 'component/Component.hb',
        destinationPath: path.posix.join(
          config.componentsDirectory,
          `{{pascal name}}/{{pascal name}}.js`
        ),
        data: answers,
        config,
      });

      template({
        templatePath: 'component/index.hb',
        destinationPath: path.posix.join(
          config.componentsDirectory,
          `{{pascal name}}/index.js`
        ),
        data: answers,
        config,
      });

      template({
        templatePath: 'component/Component.md.hb',
        destinationPath: path.posix.join(
          config.componentsDirectory,
          `{{pascal name}}/{{pascal name}}.md`
        ),
        data: answers,
        config,
      });
    })
    .catch(console.error);
};
