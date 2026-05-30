import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomePage,
    ElectronicsPage,
    BeautyPage,
    MensFashionPage,
    WomensFashionPage,
    GroceriesPage,
    HomeLivingPage,
    VehiclesPage,
    SportsPage,
    SearchPage,
    ProductDetailPage,
    CartPage,
    Login,
    SignUp
 } from './pages/index.js'

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },

      {
        path: "/search",
        element: <SearchPage />,
      },

      {
        path: "/category/beauty",
        element: <BeautyPage />,
      },

      {
        path: "/category/electronics",
        element: <ElectronicsPage />,
      },

      {
        path: "/category/mens-fashion",
        element: <MensFashionPage />,
      },

      {
        path: "/category/womens-fashion",
        element: <WomensFashionPage />,
      },

      {
        path: "/category/groceries",
        element: <GroceriesPage />,
      },

      {
        path: "/category/home-living",
        element: <HomeLivingPage />,
      },

      {
        path: "/category/vehicles",
        element: <VehiclesPage />,
      },

      {
        path: "/category/sports",
        element: <SportsPage />,
      },

      { path: "/product/:id",
        element: <ProductDetailPage />,
      },  
      {
        path: "/cart",
        element: <CartPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
