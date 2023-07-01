import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

import theme from './assets/styledTheme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Header />
      <p>Hello World!</p>
    </ThemeProvider>
  );
}

export default App;
