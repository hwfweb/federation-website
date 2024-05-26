// src/components/Header.js
import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation

// Header component that contains navigation links
const Header = () => (
  <header className="bg-blue-600 text-white p-4"> // Header with blue background and white text
    <div className="container mx-auto flex justify-between items-center"> // Container centered horizontally with flexbox
      <h1 className="text-2xl">Federation Website</h1> // Website title
      <nav> // Navigation area
        <Link to="/" className="mr-4">Home</Link> // Link to Home page
        <Link to="/about" className="mr-4">About</Link> // Link to About page
        <Link to="/news" className="mr-4">News</Link> // Link to News page
        <Link to="/contact">Contact</Link> // Link to Contact page
      </nav>
    </div>
  </header>
);

export default Header; // Export the Header component
