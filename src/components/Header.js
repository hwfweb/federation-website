// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

// Header component with enhanced styling
const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md"> {/* Header with blue background and white text */}
    <div className="container mx-auto flex justify-between items-center"> {/* Container centered horizontally with flexbox */}
      <div className="flex items-center space-x-4"> {/* Flexbox for logo and title with spacing */}
        <img src="/path/to/logo.png" alt="Federation Logo" className="h-10" /> {/* Add your logo here */}
        <h1 className="text-3xl font-bold">Federation Website</h1> {/* Enhanced title styling */}
      </div>
      <nav className="space-x-4"> {/* Navigation links with spacing */}
        <Link to="/" className="hover:underline">Home</Link> {/* Added hover effect */}
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/news" className="hover:underline">News</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header; // Export the Header component
