import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div')
);

registerServiceWorker();
