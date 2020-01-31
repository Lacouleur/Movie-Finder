import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './styles/theme';
import App from './Components/App/App';

const rootComponent = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

render(rootComponent, document.getElementById('root'));
