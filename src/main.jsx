import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: 'orders',
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
      },
      {
        path:'/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
