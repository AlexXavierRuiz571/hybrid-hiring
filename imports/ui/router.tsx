import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { UsersList } from './examples/UsersList';
import { UsersManager } from './examples/UsersManager';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users/list',
        element: <UsersList />,
      },
      {
        path: '/users/manage',
        element: <UsersManager />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
