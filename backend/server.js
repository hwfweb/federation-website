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

// Blog posts route
app.get('/api/blog', (req, res) => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
    // Add more blog posts as needed
  ];
  res.json(blogPosts);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
