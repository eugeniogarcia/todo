import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const base = ReactDOM.createRoot(
  document.getElementById('base') as HTMLElement
);
base.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
