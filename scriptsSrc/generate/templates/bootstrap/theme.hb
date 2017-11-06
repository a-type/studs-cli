import Theme, { withCompiledTheme } from 'react-studs';
// this can be changed to a different kind of theme provider if
// you want to use react-studs with another theming solution
import { ThemeProvider } from 'styled-components';

const theme = new Theme('{{param name}}', {
  colors: {
    primary: '#13547a',
    secondary: '#80d0c7',
  },
});

export default theme;
export const {{pascal name}}ThemeProvider = withCompiledTheme(theme)(ThemeProvider);
