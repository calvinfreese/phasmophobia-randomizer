import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const APP_ENV = process.env.NODE_ENV;
const baseUrl = APP_ENV === 'development' ? '/' : 'http://calvin.freese.github.io/phasmophobia-randomizer'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={baseUrl}>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
