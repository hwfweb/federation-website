// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';

// Header component with enhanced styling
const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/path/to/logo.png" alt="Federation Logo" className="h-10" /> {/* Add your logo here */}
        <h1 className="text-3xl font-bold">Federation Website</h1>
      </div>
      <div className="hidden md:block">
        {/* Desktop navigation links */}
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
      <div className="md:hidden">
        {/* Mobile navigation drawer */}
        <NavigationDrawer />
      </div>
    </div>
  </header>
);

export default Header;
