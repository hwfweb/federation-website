// src/pages/Home.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Home page component that uses global state
const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4"> {/* Container centered horizontally with padding */}
      <div className="text-center py-16"> {/* Centered text with vertical padding */}
        <h1 className="text-5xl font-bold mb-4">Welcome to the Federation Website</h1> {/* Large, bold title with margin */}
        <p className="text-lg mb-8">Discover the latest updates and information about our federation.</p> {/* Subtitle with margin */}
        {state.user && <p>Welcome back, {state.user.name}!</p>} {/* Example usage of global state */}
        <a href="/about" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"> {/* Call-to-action button */}
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home; // Export the Home component
