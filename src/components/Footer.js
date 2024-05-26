// src/components/Footer.js
import React from 'react'; // Import React library
import styles from "./index.css"

// Footer component that contains footer content
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8"> {/* Footer with gray background and white text */}
    <div className="container mx-auto text-center"> {/* Container centered horizontally */}
      <p>&copy; 2024 Federation Website. All rights reserved.</p> {/* Copyright information */}
    </div>
  </footer>
);

export default Footer; // Export the Footer component