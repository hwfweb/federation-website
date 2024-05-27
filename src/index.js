// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import { AppProvider } from './context/AppContext'; // Import the Context Provider
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

const container = document.getElementById('root');
const root = createRoot(container); // Create root using createRoot

// Wrap the app with the AppProvider and ErrorBoundary for global state management and error handling
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
