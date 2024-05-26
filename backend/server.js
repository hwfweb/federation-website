// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth'); // Import auth routes

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/federation', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes); // Use authentication routes

// Simple route to verify server is running
app.get('/', (req, res) => {
  res.send('API is running');
});

// Contact form submission route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.status(200).send('Message received');
});

// Blog posts data
const blogPosts = [
  { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.', content: 'Full content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.', content: 'Full content of the second blog post.' },
  // Add more blog posts as needed
];

// Blog posts route with search functionality
app.get('/api/blog', (req, res) => {
  const { search } = req.query;
  if (search) {
    const filteredPosts = blogPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredPosts);
  } else {
    res.json(blogPosts);
  }
});

// Route to get individual blog post by ID
app.get('/api/blog/:id', (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find(post => post.id === parseInt(id, 10));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Blog post not found');
  }
});

// Newsletter subscription route
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  console.log('New subscription:', { email });
  // Here you would normally save the subscription to a database
  res.status(200).send('Subscribed successfully');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
