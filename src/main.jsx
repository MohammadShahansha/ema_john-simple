import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
// import OrderReveiw from './components/Order/Order';
import ManageOrder from './components/ManageOrder/ManageOrder';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import cartProductsLoader from './loaders/CartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>,
      },
      {
        path:"/orderRe",
        element:<Order></Order>,
        loader: cartProductsLoader
      },
      {
        path:"/checkout",
        element:<CheckOut></CheckOut>
      },
      {
        path:"/manage",
        element:<ManageOrder></ManageOrder>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
