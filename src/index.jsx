import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import file CSS dengan Tailwind
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ImageGallery from './pages/Dashboard';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/regis" element={<Register />} />
      <Route path="/dashboard" element={<ImageGallery />} />
    </Routes>
  </BrowserRouter>
);
