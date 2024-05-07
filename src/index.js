import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { Home } from './components/Home';
import { Product } from './components/Product';
import { Comprar } from './components/Comprar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'produto',
    element: <Product />
  },
  {
    path: 'comprar',
    element: <Comprar />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
