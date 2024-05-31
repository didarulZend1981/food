import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import TestMenu from "../pages/Home/TestMenu/TestMenu";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUser from "../pages/Dashboard/Cart/AllUser/AllUser";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
              {
                path:'/',
                element:<Home></Home>
              },
              {
                path:'menu',
                element:<Menu></Menu>
              },
              {
                path: 'order/:category',
                element:<Order></Order>
              },

              {
                path:'login',
                element:<Login></Login>
              },
              {
                path:'signup',
                element:<SignUp></SignUp>
              },
          ]
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: 'cart',
              element: <Cart></Cart>
            },
            {
              path: 'users',
              element: <AllUser></AllUser>
            },
            ,
            {
              path: 'addItem',
              element:<AddItems></AddItems>
            },
            {
              path: 'manageItems',
              element:<ManageItems></ManageItems>
            },
            {
              path: 'updateItem/:id',
              element: <UpdateItem></UpdateItem>,
              loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
          ]
        }


      ]);
      export default router;