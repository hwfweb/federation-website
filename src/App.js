// src/App.js
import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import routing components
import Home from './pages/Home'; // Import Home page component
import About from './pages/About'; // Import About page component
import News from './pages/News'; // Import News page component
import Contact from './pages/Contact'; // Import Contact page component
import Layout from './components/Layout'; // Import Layout component

// Main App component
const App = () => (
  <Router>
    <Layout> // Wrap all routes with Layout component
      <Switch> // Switch between different routes
        <Route path="/" exact component={Home} /> // Route for Home page
        <Route path="/about" component={About} /> // Route for About page
        <Route path="/news" component={News} /> // Route for News page
        <Route path="/contact" component={Contact} /> // Route for Contact page
      </Switch>
    </Layout>
  </Router>
);

export default App; // Export the App component
