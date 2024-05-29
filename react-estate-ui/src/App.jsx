import HomePage from './pages/homePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './pages/listPage/ListPage';
import Layout from "./pages/layout/Layout";
import SinglePage from './pages/singlePage/SinglePage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <Profile />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;