import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider as InversifyProvider } from 'inversify-react';
import container from './di/containers';

ReactDOM.render(
  <React.StrictMode>
    <InversifyProvider container={container}>
      <App />
    </InversifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
