import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import TestMenu from "../pages/Home/TestMenu/TestMenu";
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
                element:<TestMenu></TestMenu>
              }
          ]
        },
      ]);
      export default router;