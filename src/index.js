import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    accent: '#00FFFF',
    white: '#ffffff',
    black: '#000000',
    grey: '#404040',
    light_grey: '#E0E0E0',
    aqua: '#04AEF7'
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
