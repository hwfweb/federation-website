// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

const authRoutes = require('./routes/auth'); // Import auth routes

const startServer = async () => {
  // Start in-memory MongoDB server
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  // Connect to in-memory MongoDB instance
  mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

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

  // Sample blog posts data
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
    res.status(200).send('Subscribed successfully');
  });

  // Sample news data with placeholder images
  const news = [
    { id: 1, title: 'Federation Achievements', summary: 'Our federation has achieved great milestones...', image: 'https://via.placeholder.com/600x400' },
    { id: 2, title: 'Upcoming Events', summary: 'Join us for our upcoming events...', image: 'https://via.placeholder.com/600x400' },
    { id: 3, title: 'New School Programs', summary: 'We are excited to introduce new programs...', image: 'https://via.placeholder.com/600x400' },
  ];

  // News route to get all news
  app.get('/api/news', (req, res) => {
    res.json(news);
  });

  // Sample events data
  const events = [
    { id: 1, name: 'Science Fair', details: 'Join us for the annual science fair...' },
    { id: 2, name: 'Sports Day', details: 'Come and cheer on our students during sports day...' },
  ];

  // Events route to get all events
  app.get('/api/events', (req, res) => {
    res.json(events);
  });

  // Sample testimonials data
  const testimonials = [
    { id: 1, message: 'This federation has changed my life!', author: 'John Doe' },
    { id: 2, message: 'Amazing teachers and staff.', author: 'Jane Smith' },
  ];

  // Testimonials route to get all testimonials
  app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
  });

  // Sample gallery images data
  const galleryImages = [
    { id: 1, url: 'https://via.placeholder.com/600x400', description: 'Image 1' },
    { id: 2, url: 'https://via.placeholder.com/600x400', description: 'Image 2' },
    { id: 3, url: 'https://via.placeholder.com/600x400', description: 'Image 3' },
  ];

  // Gallery route to get all gallery images
  app.get('/api/gallery', (req, res) => {
    res.json(galleryImages);
  });

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
