import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect } from 'react';

import { themeDark, themeLight } from '../lib/theme';
import Header from 'components/Header';


export default function MyApp({ Component, pageProps }) {
  const [darkState, setDarkState] = useState(true);
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={darkState ? themeDark : themeLight}>
      <CssBaseline />
      <Header darkState={darkState} handleThemeChange={handleThemeChange} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
