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
  // Here you would normally handle the form data, e.g., save it to a database or send an email
  console.log('Contact form submitted:', { name, email, message });
  res.status(200).send('Message received');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
