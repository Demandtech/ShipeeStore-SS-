import { createBrowserRouter} from 'react-router-dom'
import { DefaultLayout, GuessLayout, ProtectedLayout } from './layout'
import { ProductsPage, CartItems, Contact, Login, SignUp, About, SingleProductPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/singleproduct',
        element: <SingleProductPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: <GuessLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/cart',
        element: <CartItems />,
      },
    ],
  },
])

export default router