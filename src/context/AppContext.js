// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create a context for global state management
export const AppContext = createContext();

// Provider component that wraps the app and provides state
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null, // Initial state for user
    // Add other state variables here
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
