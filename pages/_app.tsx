import { useState, useMemo, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import type { AppProps } from 'next/app';

import { ThemeContext } from 'utils/context';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const getTheme = getCookie('theme');
  const [theme, setTheme] = useState(getTheme ? 'dark' : 'light');
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
