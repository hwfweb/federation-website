// src/components/NewsCarousel.js
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// NewsCarousel component to display featured news
const NewsCarousel = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log('Fetching news from API');
    fetch('http://localhost:5000/api/news')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched news data:', data);
        setNews(data.slice(0, 5)); // Fetch only the top 5 news articles
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold mb-4">Featured News</h2>
      {news.length > 0 ? (
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={600}
        >
          {news.map((article, index) => (
            <div key={index}>
              <img src={article.image} alt={article.title} className="h-64 object-cover w-full" />
              <div className="legend">
                <h3 className="text-2xl">{article.title}</h3>
                <p>{article.summary}</p>
                <a href={`/news/${article.id}`} className="text-blue-600 hover:underline">Read more</a>
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
