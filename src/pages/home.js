// src/pages/Home.js
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import SubscriptionForm from '../components/SubscriptionForm'; // Import the SubscriptionForm component

// Home page component that uses global state
const Home = () => {
  const { state } = useContext(AppContext);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch news articles (replace with real API endpoint)
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data));

    // Fetch events (replace with real API endpoint)
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));

    // Fetch testimonials (replace with real API endpoint)
    fetch('/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Federation Website</h1>
        <p className="text-lg mb-8">Discover the latest updates and information about our federation.</p>
        {state.user && <p>Welcome back, {state.user.name}!</p>}
        <a href="/about" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Learn More
        </a>
      </div>
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-4">Latest News</h2>
        <ul>
          {news.map(article => (
            <li key={article.id} className="mb-4">
              <h3 className="text-2xl">{article.title}</h3>
              <p>{article.summary}</p>
              <a href={`/news/${article.id}`} className="text-blue-600 hover:underline">Read more</a>
            </li>
          ))}
        </ul>
      </section>
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
