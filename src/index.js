// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css'; // Import Tailwind CSS
import App from './App';
import { AppProvider } from './context/AppContext'; // Import the Context Provider

// Wrap the app with the AppProvider for global state management
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
