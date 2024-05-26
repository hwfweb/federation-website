// src/pages/Blog.js
import React, { useState, useEffect } from 'react';

// Blog page component
const Blog = () => {
  // State to manage blog posts
  const [posts, setPosts] = useState([]);

  // Fetch blog posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map(post => (
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
