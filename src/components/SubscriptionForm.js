// src/components/SubscriptionForm.js
import React, { useState } from 'react';

// SubscriptionForm component for newsletter subscription
const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.text();
      setMessage(result);
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Failed to subscribe.');
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default SubscriptionForm;
