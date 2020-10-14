import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {theme} from '../components/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.fonts ? theme.fonts : 'Untitled Sans, Helvetica, Arial, sans-serif'};
  }
`;

function App({Component, pageProps}) {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
  )
};

export default App;