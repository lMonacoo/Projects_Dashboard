import { ThemeProvider } from 'styled-components';

import { Routes } from '~/routes/routes';
import { GlobalStyles, theme } from '~/styles';

function App() {
  return (
    <ThemeProvider theme={theme.properties}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
