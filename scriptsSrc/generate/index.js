import inquirer from 'inquirer';
import handlebars from 'handlebars';
import changeCase from 'change-case';

import element from './element';
import bootstrap from './bootstrap';

Object.keys(changeCase).forEach(casing => {
  handlebars.registerHelper(casing, changeCase[casing]);
});

export default ({ config, generator }) => {
  switch (generator) {
    case 'element':
      element({ config });
      break;
    case 'bootstrap':
      bootstrap({ config });
      break;
    default:
      console.error(
        `Unknown generator ${generator}, options are [bootstrap, element]`
      );
      break;
  }
};
