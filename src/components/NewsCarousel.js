// src/components/NewsCarousel.js
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewsCarousel = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news from API");
        const response = await fetch('http://localhost:5000/api/news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched news data:", data);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="p-4 bg-red-100 text-red-700 rounded">{error}</div>;
  }

  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold mb-4">Featured News</h2>
      {news.length > 0 ? (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          {news.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} className="h-64 object-cover w-full" />
              <div className="legend">
                <h3 className="text-2xl">{item.title}</h3>
                <p>{item.summary}</p>
                <a href={`/news/${item.id}`} className="text-blue-600 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No featured news available.</p>
      )}
    </div>
  );
};

export default NewsCarousel;
