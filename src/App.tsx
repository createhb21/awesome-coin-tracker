import Router from './Router';
import { GlobalStyle } from './lib/styles/globalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
