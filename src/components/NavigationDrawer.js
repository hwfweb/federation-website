// src/components/NavigationDrawer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navigation Drawer component
const NavigationDrawer = () => {
  // State to manage drawer visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle drawer visibility
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle drawer visibility */}
      <button onClick={toggleDrawer} className="text-white bg-blue-600 p-2 rounded-md">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* Drawer menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-blue-600 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <nav className="flex flex-col p-4 space-y-4">
          {/* Navigation links */}
          <Link to="/" className="hover:underline" onClick={toggleDrawer}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={toggleDrawer}>About</Link>
          <Link to="/news" className="hover:underline" onClick={toggleDrawer}>News</Link>
          <Link to="/contact" className="hover:underline" onClick={toggleDrawer}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavigationDrawer;
