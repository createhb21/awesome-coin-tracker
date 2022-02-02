import Router from './routes';
import { GlobalStyle } from './lib/styles/globalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './lib/styles/theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './store/themeStates';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
