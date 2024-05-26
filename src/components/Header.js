// src/components/Header.js
import React from 'react';
import styles from "./index.css"
import { Link } from 'react-router-dom';

// Header component with enhanced styling
const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md"> {/* Header with blue background and white text */}
    <div className="container mx-auto flex justify-between items-center"> {/* Container centered horizontally with flexbox */}
      <h1 className="text-3xl font-bold">Federation Website</h1> {/* Enhanced title styling */}
      <nav>
        <Link to="/" className="mr-4 hover:underline">Home</Link> {/* Added hover effect */}
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/news" className="mr-4 hover:underline">News</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header; // Ensure the Header component is exported as default
