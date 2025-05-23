import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";  // Import Bootstrap JS (for components like Navbar)
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
