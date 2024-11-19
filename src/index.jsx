import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import file CSS dengan Tailwind;
import Login from './pages/Login';
import Register from './pages/Register';
import ImageGallery from './pages/Dashboard';
// Definisikan routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/regis" element={<Register />} />
      <Route path="/dashboard" element={<ImageGallery />} />
    </Routes>
  </Router>
);