// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

// Header component with enhanced styling
const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md"> {/* Header with blue background and white text */}
    <div className="container mx-auto flex justify-between items-center"> {/* Container centered horizontally with flexbox */}
      <h1 className="text-3xl font-bold">{/* Enhanced title styling */}Federation Website</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">{/* Added hover effect */}Home</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/news" className="mr-4 hover:underline">News</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header; // Export the Header component
