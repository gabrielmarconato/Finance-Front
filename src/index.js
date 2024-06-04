import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import { Home } from './screens/Home';
import { Itens } from './screens/Itens';
import { Login } from './screens/Login';
import { Logout } from './screens/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/itens',
    element: <Itens />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logout',
    element: <Logout />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);