// src/components/Footer.js
import React from 'react';

// Footer component with styling
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8"> {/* Footer with dark background and white text */}
    <div className="container mx-auto text-center"> {/* Container centered horizontally */}
      <p>&copy; 2024 Federation Website. All rights reserved.</p> {/* Footer text */}
      <nav className="space-x-4 mt-2"> {/* Navigation links with spacing */}
        <a href="/" className="hover:underline">Home</a> {/* Added hover effect */}
        <a href="/about" className="hover:underline">About</a>
        <a href="/news" className="hover:underline">News</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer; // Export the Footer component
