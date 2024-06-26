// src/pages/Blog.js
import React, { useState, useEffect } from 'react';

// Blog page component
const Blog = () => {
  // State to manage blog posts
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState('');

  // Fetch blog posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blog');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search query
  useEffect(() => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchQuery, posts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {filteredPosts.length > 0 ? (
        <div className="space-y-4">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      ) : (
        !error && <p>No blog posts available</p>
      )}
    </div>
  );
};

export default Blog;
