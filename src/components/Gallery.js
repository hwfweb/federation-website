// src/components/Gallery.js
import React from 'react';

// Gallery component
const Gallery = () => {
  // Array of image paths
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    // Add more image paths
  ];

  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold mb-4">Gallery</h2>
      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            {/* Image with hover effect */}
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
