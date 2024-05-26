// src/components/Layout.js
import React from 'react';
import Header from './Header'; // Correctly import the Header component
import Footer from './Footer'; // Assuming you have a Footer component
import styles from "./index.css"

// Layout component that wraps around the page content
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header /> {/* Include the Header component */}
    <main className="flex-grow">{children}</main> {/* Main content area that grows to fill available space */}
    <Footer /> {/* Include the Footer component */}
  </div>
);

export default Layout; // Export the Layout component
