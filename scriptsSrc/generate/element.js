import inquirer from 'inquirer';
import template from './template';

export default ({ config }) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the element:',
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
        templatePath: 'element/Element.hb',
        destinationPath: 'elements/{{pascal name}}/{{pascal name}}.js',
        data: answers,
        config,
      });

      template({
        templatePath: 'element/index.hb',
        destinationPath: 'elements/{{pascal name}}/index.js',
        data: answers,
        config,
      });

      template({
        templatePath: 'element/Element.md.hb',
        destinationPath: 'elements/{{pascal name}}/{{pascal name}}.md',
        data: answers,
        config,
      });
    })
    .catch(console.error);
};
