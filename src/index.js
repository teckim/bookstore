import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import './assets/css/index.css';
import './assets/sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
