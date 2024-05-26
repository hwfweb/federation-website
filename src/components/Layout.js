// src/components/Layout.js
import React from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

// Layout component that wraps around the page content
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen"> {/* Flexbox layout with minimum height of screen */}
    <Header /> {/* Include the Header component */}
    <main className="flex-grow">{children}</main> {/* Main content area that grows to fill available space */}
    <Footer /> {/* Include the Footer component */}
  </div>
);

export default Layout; // Export the Layout component
