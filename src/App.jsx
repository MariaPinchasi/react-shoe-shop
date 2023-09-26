import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import {
  Home,
  AddProduct,
  Product,
  EditProduct,
  Delete,
  NotFound
} from './pages';
import LogIn from './components/LogIn';

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
        element: <AddProduct />,
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
            element: <EditProduct />
          }
        ]
      },
      {
        path: 'delete',
        element: <Delete />,
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
