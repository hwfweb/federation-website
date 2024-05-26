// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import { AppProvider } from './context/AppContext'; // Import the Context Provider

// Wrap the app with the AppProvider for global state management
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
