// src/pages/News.js
import React, { useState, useEffect } from 'react';

// Example News page component with dynamic data fetching
const News = () => {
  const [articles, setArticles] = useState([]);

  // Fetch news articles (this can be replaced with a real API call)
  useEffect(() => {
    const fetchArticles = async () => {
      // Example data
      const data = [
        { id: 1, title: 'News Article 1', content: 'Content of news article 1.' },
        { id: 2, title: 'News Article 2', content: 'Content of news article 2.' },
        { id: 3, title: 'News Article 3', content: 'Content of news article 3.' },
      ];
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">News & Events</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} className="mb-4">
            <h2 className="text-2xl">{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
