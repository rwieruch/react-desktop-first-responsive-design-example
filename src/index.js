import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'core-js/fn/array/fill';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import * as THEMES from './constants/theme';

// Theme could be selected depending on build to address specifc screen sizes
const theme = THEMES.TLS_SMALL;

ReactDOM.render(
  <ThemeProvider theme={{ type: theme }}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
