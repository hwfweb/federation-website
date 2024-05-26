// src/pages/About.js
import React from 'react';

// About page component
const About = () => (
  <div className="container mx-auto p-4"> {/* Container centered horizontally with padding */}
    <h1 className="text-4xl font-bold mb-4">About Us</h1> {/* Large, bold title with margin */}
    <p className="text-lg mb-8">Our federation is committed to providing excellent education and fostering a supportive community.</p> {/* Description with margin */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid layout with gaps */}
      <div className="bg-white p-4 shadow-md rounded"> {/* Card with shadow and rounded corners */}
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2> {/* Card title */}
        <p>To nurture and develop the talents of our students, preparing them for future success.</p> {/* Card content */}
      </div>
      <div className="bg-white p-4 shadow-md rounded"> {/* Card with shadow and rounded corners */}
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2> {/* Card title */}
        <p>To be a leading educational institution that inspires and empowers every student to reach their full potential.</p> {/* Card content */}
      </div>
    </div>
  </div>
);

export default About; // Export the About component
