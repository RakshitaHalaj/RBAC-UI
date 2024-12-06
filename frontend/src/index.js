import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18 or later
import App from './App'; // Main App component
import './index.css';

 // Optional: Global CSS styles

// Create a root container for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
