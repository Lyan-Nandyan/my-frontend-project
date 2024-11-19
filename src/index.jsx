import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import file CSS dengan Tailwind
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ImageGallery from './pages/Dashboard';
// Definisikan routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/regis",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <ImageGallery />,
  },
]);

// Render aplikasi dengan routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);