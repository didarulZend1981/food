####  CMD
      npm create vite@latest name-of-your-project -- --template react
      cd my-project
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      npm i -D daisyui@latest
      npm install react-router-dom localforage match-sorter sort-by

      //
      npm install react-icons --save

#### tailwind.config.js
        /** @type {import('tailwindcss').Config} */
          export default {
            content: [
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
              extend: {},
            },
            plugins: [
              require('daisyui'),
            ],
          }

####  index.css
          @tailwind base;
          @tailwind components;
          @tailwind utilities;


##### cmd
      npm run dev



#######   route Create 
#### 1.CMD 
        npm install react-router-dom localforage match-sorter sort-by
##### 2.Routes.jsx
      import { createBrowserRouter } from "react-router-dom";
      const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
      ]);
      export default router;

##### 3.main.jsx
      import React from 'react'
      import ReactDOM from 'react-dom/client'

      import './index.css'
      import { RouterProvider } from 'react-router-dom'
      import router from './routes/Routes.jsx'

      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      )




#######   Main Route 
#### 1-routes/Routes.jsx
        import { createBrowserRouter } from "react-router-dom";
        import Main from "../Layout/Main";
        import Home from "../pages/Home/Home/Home";
              const router = createBrowserRouter([
                {
                  path: "/",
                  element: <Main></Main>,
                  children:[
                      {
                        path:'/',
                        element:<Home></Home>
                      }
                  ]
                },
              ]);
          export default router;
#### 2-Layout/Main.jsx
      import { Outlet } from "react-router-dom";
      import NavBar from "../pages/Shared/NavBar/NavBar";
      import Footer from "../pages/Shared/Footer/Footer";
      


      const Main = () => {
        return (
          <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
              <Footer></Footer>
          </div>
        );
      };

      export default Main;



#### 3-pages/Shared/NavBar/NavBar.jsx
        const NavBar = () => {
          const navItems =<>
                  <li><a>Item 1</a></li>
                    <li>
                      <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                          <li><a>Submenu 1</a></li>
                          <li><a>Submenu 2</a></li>
                        </ul>
                      </details>
                    </li>
                    <li><a>Item 3</a></li>
                </>

          return (
            <div>
              <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
            </div>
          );
        };

        export default NavBar;

#### 4-pages/Shared/Footer/Footer.jsx


      import { FaFacebook } from "react-icons/fa6";
      import { FaYoutube } from "react-icons/fa";
      import { FaLinkedinIn } from "react-icons/fa";
      import { IoLogoBuffer } from "react-icons/io";
      const Footer = () => {
        return (
          <footer>
              <div className="footer p-10 bg-neutral text-neutral-content">
                  <aside>
                  <IoLogoBuffer />
                      <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                  </aside> 
                  <nav>
                      <h6 className="footer-title">Social</h6> 
                      <div className="grid grid-flow-col gap-4">
                          <a><FaFacebook /></a>
                          <a><FaYoutube /></a>
                          <a><FaLinkedinIn /></a>
                      </div>
                  </nav>


                  
              </div>
              <div className="footer footer-center p-4 bg-base-300 text-base-content">
                        <aside>
                          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                        </aside>
                  </div>
              

          </footer>
        );
      };

      export default Footer;

#### 5-pages/Home/Home/Home.jsx
      const Home = () => {
          return (
            <div>
                <h2>Home Pages</h2>
            </div>
          );
        };

      export default Home;
 
