import inquirer from 'inquirer';
import template from './template';

export default ({ config }) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of your style guide:',
        validate: value => (/.+/.test(value) ? true : 'Name is required'),
      },
    ])
    .then(answers => {
      template({
        templatePath: 'bootstrap/theme.hb',
        destinationPath: 'theme.js',
        data: answers,
        config,
      });

      template({
        templatePath: 'bootstrap/Elements.md',
        destinationPath: 'elements/Elements.md',
        data: answers,
        config,
      });

      template({
        templatePath: 'bootstrap/Compositions.md',
        destinationPath: 'compositions/Compositions.md',
        data: answers,
        config,
      });

      template({
        templatePath: 'bootstrap/Behaviors.md',
        destinationPath: 'behaviors/Behaviors.md',
        data: answers,
        config,
      });
    })
    .catch(console.error);
};
