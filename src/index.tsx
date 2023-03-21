import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import container from './infrastructure/container';
import { Provider as InversifyProvider } from 'inversify-react';

ReactDOM.render(
  <React.StrictMode>
    <InversifyProvider container={container}>
      <App />
    </InversifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
