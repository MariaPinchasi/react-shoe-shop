import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import LogIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';

import {
  Home,
  AddProduct,
  Product,
  EditProduct,
  Delete,
  NotFound
} from './pages';

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'add',
        element: <ProtectedRoute><AddProduct /> </ProtectedRoute>,
      },
      {
        path: 'logIn',
        element: <LogIn />,
      },
      {
        path: 'products',
        children: [
          {
            path: ':shoeId',
            element: <Product />
          },
          {
            path: ':shoeId/edit',
            element: <ProtectedRoute> <EditProduct /></ProtectedRoute>
          }
        ]
      },
      {
        path: 'delete',
        element: <ProtectedRoute> <Delete /></ProtectedRoute>,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
