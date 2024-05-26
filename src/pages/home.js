// src/pages/Home.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Home page component that uses global state
const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4"> {/* Container centered horizontally with padding */}
      <h1 className="text-4xl mb-4">Welcome to the Federation Website</h1> {/* Page title */}
      <p>This is the home page. Here you can find the latest updates and information about our federation.</p> {/* Page content */}
      {state.user && <p>Welcome back, {state.user.name}!</p>} {/* Example usage of global state */}
    </div>
  );
};

export default Home; // Export the Home component
