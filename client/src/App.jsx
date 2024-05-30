import HomePage from './pages/homePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './pages/listPage/ListPage';
import { Layout, RequireLayout } from './pages/layout/Layout';
import SinglePage from './pages/singlePage/SinglePage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import UpdateProfile from "./pages/updateProfile/UpdateProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
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
    {
      path: '/',
      element: <RequireLayout />,
      children: [
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/profile/update',
          element: <UpdateProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;