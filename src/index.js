import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
// This is the entry point of the React application.      

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);