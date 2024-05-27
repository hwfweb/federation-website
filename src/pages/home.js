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
  const [faqs, setFaqs] = useState([]);
  const [faqError, setFaqError] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

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

    // Fetch FAQs
    fetch('http://localhost:5000/api/faq')
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => {
        console.error('Error fetching FAQs:', error);
        setFaqError('Failed to load FAQs. Please try again later.');
      });
  }, []);

  // Toggle FAQ answer visibility
  const toggleFaq = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

      {/* Gallery section */}
      <Gallery />

      {/* FAQ section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqError && <p className="mt-4 text-red-600">{faqError}</p>}
        {faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border p-4 rounded-md">
                <h3 className="text-2xl font-semibold cursor-pointer" onClick={() => toggleFaq(index)}>
                  {faq.question}
                </h3>
                {activeIndex === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        ) : (
          !faqError && <p>No FAQs available.</p>
        )}
      </section>

      {/* Subscription form */}
      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default Home;
