// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// BlogPost component to display individual blog post details
const BlogPost = () => {
  // Get post ID from URL parameters
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // Fetch the specific blog post from the backend API
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [id]);

  // Display loading message or post details
  return (
    <div className="container mx-auto p-4">
      {post ? (
        <div className="bg-white p-4 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
