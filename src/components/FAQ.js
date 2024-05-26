// src/components/FAQ.js
import React, { useState } from 'react';

// FAQ component
const FAQ = () => {
  // State to manage the visibility of answers
  const [visible, setVisible] = useState(null);

  // Toggle visibility of the selected question
  const toggleVisibility = (index) => {
    setVisible(visible === index ? null : index);
  };

  // List of FAQ questions and answers
  const faqs = [
    {
      question: 'What is the mission of the federation?',
      answer: 'Our mission is to nurture and develop the talents of our students, preparing them for future success.',
    },
    {
      question: 'How can I contact the federation?',
      answer: 'You can contact us via the contact form on our website or by emailing us at contact@federation.com.',
    },
    {
      question: 'Where can I find the latest news?',
      answer: 'The latest news can be found on the News page of our website.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3
              className="text-2xl font-semibold cursor-pointer"
              onClick={() => toggleVisibility(index)}
            >
              {faq.question}
            </h3>
            {visible === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
