import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM.render
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the App component inside BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
