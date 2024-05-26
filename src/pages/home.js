// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import SubscriptionForm from '../components/SubscriptionForm';
import NewsCarousel from '../components/NewsCarousel'; // Import the NewsCarousel component

// Home page component
const Home = () => {
  const [events, setEvents] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch events
    fetch('http://localhost:5000/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));

    // Fetch testimonials
    fetch('http://localhost:5000/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Hero section with background color and text alignment */}
      <div className="hero bg-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Federation Website</h1>
        <p className="text-lg mb-8">Discover the latest updates and information about our federation.</p>
        <a href="/about" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-100">
          Learn More
        </a>
      </div>
      <NewsCarousel /> {/* Use NewsCarousel without passing news prop */}
      {/* Latest News section */}
      {/* Remove Latest News section if it's covered by the NewsCarousel */}
      {/* Upcoming Events section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        <ul>
          {events.map(event => (
            <li key={event.id} className="mb-4">
              <h3 className="text-2xl">{event.name}</h3>
              <p>{event.details}</p>
            </li>
          ))}
        </ul>
      </section>
      {/* Testimonials section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <ul>
          {testimonials.map(testimonial => (
            <li key={testimonial.id} className="mb-4">
              <p className="text-xl italic">"{testimonial.message}"</p>
              <p className="text-lg font-bold">- {testimonial.author}</p>
            </li>
          ))}
        </ul>
      </section>
      <Gallery /> {/* Add Gallery component here */}
      <FAQ /> {/* Add FAQ component here */}
      <SubscriptionForm /> {/* Add SubscriptionForm component here */}
    </div>
  );
};

export default Home;
