import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Home } from './components/Home';
import { Produtos } from './components/Produtos';
import { QuemSomos } from './components/QuemSomos';
import { ErrorBoundary } from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/itens',
        element: <Produtos />
      },
      {
        path: '/itens/:id',
        element: <Produtos />
      },
      {
        path: '/sobrenos',
        element: <QuemSomos />
      },
      {
        path: "pagina_antiga",
        element: <Navigate to="/"/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
