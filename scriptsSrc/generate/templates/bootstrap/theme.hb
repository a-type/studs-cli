import Theme, { createThemeProvider } from 'styled-library-themer';

const theme = new Theme('{{param name}}', {
  colors: {
    primary: '#13547a',
    secondary: '#80d0c7',
  },
});

export default theme;
export const {{pascal name}}ThemeProvider = createThemeProvider(theme);
