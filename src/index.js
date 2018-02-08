import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'core-js/fn/array/fill';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import * as LAYOUTS from './constants/layouts';

// Theme could be selected depending on build to address specifc screen sizes
const layout = LAYOUTS.NONE;

ReactDOM.render(
  <ThemeProvider theme={{ layout }}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
