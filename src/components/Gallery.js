// src/pages/Gallery.js
import React, { useState, useEffect } from 'react';

// Gallery page component
const Gallery = () => {
  // State to manage gallery images
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  // Fetch gallery images from the backend API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setError('Failed to load gallery images. Please try again later.');
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
              <img src={image.url} alt={image.description} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      ) : (
        !error && <p>No images available.</p>
      )}
    </div>
  );
};

export default Gallery;
