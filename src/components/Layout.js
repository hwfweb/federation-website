// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Layout component wrapping the content with Header and Footer
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen"> {/* Flexbox for vertical layout with minimum screen height */}
    <Header /> {/* Include the Header component */}
    <main className="flex-grow container mx-auto p-4"> {/* Main content area that grows to fill available space */}
      {children} {/* Render child components */}
    </main>
    <Footer /> {/* Include the Footer component */}
  </div>
);

export default Layout; // Export the Layout component
