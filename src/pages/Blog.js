// src/pages/Blog.js
import React, { useState, useEffect } from 'react';

// Blog page component
const Blog = () => {
  // State to manage blog posts
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Fetch blog posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
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
        <p>No blog posts available</p>
      )}
    </div>
  );
};

export default Blog;
