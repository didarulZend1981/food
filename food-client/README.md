####  CMD
      npm create vite@latest name-of-your-project -- --template react
      cd my-project
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      npm i -D daisyui@latest
      npm install react-router-dom localforage match-sorter sort-by

      //
      npm install react-icons --save
      npm install react-responsive-carousel --save
##### https://github.com/brillout/awesome-react-components


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


#######   Banner 
#### CMD 
      npm install react-responsive-carousel --save
#### 5-pages/Banner/Banner.jsx

      import "react-responsive-carousel/lib/styles/carousel.min.css"; 
      import { Carousel } from 'react-responsive-carousel';
      import img1 from '../../../../assets/home/01.jpg'
      import img2 from '../../../../assets/home/02.jpg'

      const Banner = () => {
      return (
          <Carousel>
              <div>
                  <img src={img1} />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src={img2} />
                  <p className="legend">Legend 2</p>
              </div>

          </Carousel>
          );
      };

      export default Banner;
    


######  Navber Changing  using menu trensparent

        <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">

#######   SECTION TITLE
#### 1.components/SectionTitle/SectionTitle.jsx
      const SectionTitle = ({heading, subHeading}) => {
        return (
            <div className="mx-auto text-center md:w-4/12 my-8">
                <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
                <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
            </div>
        );
      };

      export default SectionTitle;
#### 2.Category/Category.jsx
      <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}>
            
      </SectionTitle>

#########   PopularMenu TITLE
######## Pages/Home/Home.jsx    -------PopularMenu
 
          import PopularMenu from "./PopularMenu/PopularMenu";
            const Home = () => {
              return (
                <div>
                    <PopularMenu></PopularMenu>
                </div>
              );
            };
          export default Home;
######## 1.Pages/Home/PopularMenu/PopularMenu.jsx


            import { useEffect, useState } from "react";
            import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
            import MenuItem from "../../../Shared/MenuItem/MenuItem";


            const PopularMenu = () => {
                const [menu,setMenu]=useState([]);
                  useEffect(()=>{
                    fetch('menu.json')
                    .then(res=>res.json())
                    .then(data=>{
                      const PopularItems =data.filter(item=>item.category==='popular');
                      setMenu(PopularItems);
                    })
                  },[])
                
                return (
                  <section className="mb-12">
                        <SectionTitle
                              heading="From Our Menu"
                              subHeading="Popular Items"
                          >
                            
                          </SectionTitle>
                          <div className="grid md:grid-cols-2 gap-10">
                              {
                                  menu.map(item => <MenuItem
                                      key={item._id}
                                      item={item}
                                  ></MenuItem>)
                              }
                          </div>
                  </section>
                );
              };

              export default PopularMenu;

######## 2.Shared/MenuItem/MenuItem.jsx





            const MenuItem = ({item}) => {
                  const {name, image, price, recipe} = item;
                  return (
                      <div className="flex space-x-2">
                          <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
                          <div>
                              <h3 className="uppercase">{name}----------</h3>
                              <p>{recipe}</p>
                          </div>
                          <p className="text-yellow-500">${price}</p>
                      </div>
                  );
                };

            export default MenuItem;

########### FETURED MENU
##### 1.pages/Home/Home/Home.jsx


        import Featured from "./Featured/Featured";

            const Home = () => {
              return (
                <div>
              
                    <Featured></Featured>
                </div>
              );
            };

        export default Home;

##### 2.pages/Home/Featured/Featured.jsx



      
          import featuredImg from '../../../../assets/home/featured.jpg';
          import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
          import './Featured.css';


          const Featured = () => {
              return (
                  <div className="featured-item bg-fixed text-white pt-8 my-20">
                      <SectionTitle subHeading="check it out" heading="Featured Item" >

                      </SectionTitle>
                      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                          <div>
                              <img src={featuredImg} alt="" />
                          </div>
                          <div className="md:ml-10">
                              <p>Aug 20, 2029</p>
                              <p className="uppercase">Where can i get some?</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                              <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                          </div>
                      </div>
                  </div>
              );
          };

          export default Featured;
##### 3.pages/Home/Featured/Featured.css

      .featured-item{
          background-image: url('../../../../assets/home/featured.jpg');
      }
 