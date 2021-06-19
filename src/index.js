import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import App from './components/App';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    height: 100vh;
    width: 100%;
  }

`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);