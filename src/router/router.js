import { createBrowserRouter } from 'react-router-dom';
import ProtectedLayout from './layout/ProtectedLayout';
import AuthLayout from './layout/AuthLayout';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Messeger from '../pages/messeger/Messeger';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Friends from '../pages/friends/Friends';
import Watch from '../pages/watch/Watch';
import AppLayout from './layout/AppLayout';
import Store from '../pages/store/Store';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/profile/:username',
            element: <Profile />,
          },
          {
            path: '/messeger',
            element: <Messeger />,
          },
          {
            path: '/market-place',
            element: <Store />,
          },
          {
            path: '/watch',
            element: <Watch />,
          },
          {
            path: '/friends',
            element: <Friends />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
