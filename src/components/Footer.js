// src/components/Footer.js
import React from 'react';

// Footer component with additional links and information
const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 mt-8">
    <div className="container mx-auto flex justify-between items-center flex-wrap">
      {/* Footer left section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Federation Website</h2>
        <p>&copy; 2024 Federation. All rights reserved.</p>
      </div>
      {/* Footer right section with links */}
      <div className="flex space-x-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul>
            <li>Email: contact@federation.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Federation St, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
