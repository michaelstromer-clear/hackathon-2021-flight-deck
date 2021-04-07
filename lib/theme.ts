import { createMuiTheme } from '@material-ui/core/styles';
import colors from 'assets/styles/colors';

const themeDark = createMuiTheme({
  palette: {
    primary: { main: colors.darkBlue },
    secondary: { main: colors.white },
    background: { default: colors.darkBlue, paper: colors.darkBlue },
    text: { primary: colors.white },
    divider: colors.borderGray,
    type: 'dark',
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 16,
  },
});

const themeLight = createMuiTheme({
  palette: {
    primary: { main: colors.lightBlue },
    secondary: { main: colors.white },
    background: { default: colors.lightBlue, paper: colors.lightBlue },
    // text: { primary: colors.white, secondary: colors.white },
    divider: colors.borderGray,
    type: 'light',
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 16,
  },
});

export { themeDark, themeLight };
