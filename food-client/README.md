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



###### TESTMONIAL
##### CMD
       $ npm install swiper   (Previous install no need instal)
       npm i @smastrom/react-rating  (Previous install no need instal)
#####  ./Testimonial/Testimonial.jsx;

          import { useEffect, useState } from "react";
          import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

          import { Swiper, SwiperSlide } from 'swiper/react';
          import { Rating } from "@smastrom/react-rating";
          import '@smastrom/react-rating/style.css'
          // Import Swiper styles
          import 'swiper/css';
          import 'swiper/css/navigation';

          // import required modules
          import { Navigation } from 'swiper/modules';





          const Testimonial = () => {
          const [reviews, setReviews] = useState([]);

          useEffect(() => {
          fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
          }, [])

          console.log("revieCount",reviews.length)
          return (
          <section className="my-20">

          <SectionTitle subHeading="What our Client Say" heading="Testimonial" >

            </SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

          {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

          </Swiper>



            

            
          </section>
          );
          };

          export default Testimonial;


###### Dynamic Page Title By Route Using React Helmet
#### Site Logo change


####    index.html
       <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Bistro Boss RESTURENT</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>

#### CMD

      npm i react-helmet-async
      
####    main.jsx

        import { HelmetProvider } from 'react-helmet-async';

          ReactDOM.createRoot(document.getElementById('root')).render(
              <React.StrictMode>
                <HelmetProvider>
                    <div className='max-w-screen-xl mx-auto'>
                    <RouterProvider router={router} />
                    </div>
                </HelmetProvider>
                
              
              </React.StrictMode>,
          )

##### Requre page(such as home and menu)


##### home.jsx--

      import { Helmet } from "react-helmet-async";
      


      const Home = () => {
        return (
          <div>
            <Helmet>
              <title>Bistor Boss | Home</title>
              
            </Helmet>
             
          </div>
        );
      };

      export default Home;

#####  menu.jsx

        import { Helmet } from "react-helmet-async";


        const TestMenu = () => {
          return (
            <div>
              <Helmet>
                <title>Hello World</title>
                
              </Helmet>
            </div>
          );
        };

        export default TestMenu;

##### Dynamic Cover with parallax
#### Cover.jsx

        import { Parallax } from 'react-parallax';

        const Cover = ({ img, title, description }) => {
            return (
                <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage={img}
                    bgImageAlt="the menu"
                    strength={-200}
                >
                    <div className="hero h-[700px]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                                <p className="mb-5">{description}</p>

                            </div>
                        </div>
                    </div>
                </Parallax>

            );
        };

        export default Cover;

##### Menu/Menu.jsx (Cover using menu)


      import Cover from '../Shared/Cover/Cover';
      import menuImg from '../../assets/menu/banner3.jpg'

      const Menu = () => {
        return (
          <div>
      
                  <Cover 
                        img={menuImg} 
                        title="our menu" 
                        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.">


                  </Cover>
              
                  
          </div>
        );
      };

      export default Menu;

###### Custom Hook Using useManu
##### hooks/useMenu.jsx


      import { useEffect, useState } from "react";

      const useMenu = () => {
      const [menu, setMenu] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
      }, [])
      return [menu, loading]
      }

      export default useMenu;

#### /PopularMenu/PopularMenu.jsx  (useMenu.jsx)

      import { useEffect, useState } from "react";
      import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
      import MenuItem from "../../../Shared/MenuItem/MenuItem";
      import useMenu from "../../../../hooks/useMenu";


      const PopularMenu = () => {
        const [menu]=useMenu();
        const popular =menu.filter(item=>item.category==='popular');
        
        return (
          <section className="mb-12">
                <SectionTitle
                      heading="From Our Menu"
                      subHeading="Popular Items"
                  >
                    
                  </SectionTitle>
                  <div className="grid md:grid-cols-2 gap-10">
                      {
                          popular.map(item => <MenuItem
                              key={item._id}
                              item={item}
                          ></MenuItem>)
                      }
                  </div>
          </section>
        );
      };

      export default PopularMenu;



##### Full MENU PAGE -3 step
#### Cover.jsx

    import { Parallax } from 'react-parallax';

    const Cover = ({ img, title, description }) => {
        return (
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{description}</p>

                        </div>
                    </div>
                </div>
            </Parallax>

        );
    };

    export default Cover;


#### MenuCategory/MenuCategory.jsx


        import { Link } from 'react-router-dom';


        import Cover from '../../Shared/Cover/Cover';
        import MenuItem from '../../Shared/MenuItem/MenuItem';

        const MenuCategory = ({items, title,description, img}) => {
            return (
                <div className='pt-8'>
                    { title && <Cover img={img} title={title} description={description}></Cover>}
                    <div className="grid md:grid-cols-2 gap-10 my-16">
                        {
                            items.map(item => <MenuItem
                                key={item._id}
                                item={item}
                            ></MenuItem>)
                        }
                    </div>
                    <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </Link>
                </div>
            );
        };

        export default MenuCategory;


#### Page/Menu/menu.jsx
      import { Helmet } from 'react-helmet-async';
      import useMenu from '../../hooks/useMenu';
      import Cover from '../Shared/Cover/Cover';
      import SectionTitle from '../../components/SectionTitle/SectionTitle';
     
      import menuImg from '../../assets/menu/banner3.jpg'
      import dessertImg from '../../assets/menu/dessert-bg.jpeg'
      import pizzaImg from '../../assets/menu/dessert-bg.jpeg'
      import saladImg from '../../assets/menu/dessert-bg.jpeg'
      import soupImg from '../../assets/menu/dessert-bg.jpeg'
      import MenuCategory from './MenuCategory/MenuCategory';



      const Menu = () => {
      const [menu] = useMenu();
      const desserts = menu.filter(item => item.category === 'dessert');
      const soup = menu.filter(item => item.category === 'soup');
      const salad = menu.filter(item => item.category === 'salad');
      const pizza = menu.filter(item => item.category === 'pizza');
      const offered = menu.filter(item => item.category === 'offered');
      return (
          <div>
              <Helmet>
                  <title>Bistro Boss | Menu</title>
              </Helmet>
              <Cover img={menuImg} title="our menu"></Cover>
              {/* main cover */}
              <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
              {/* offered menu items */}
              {/* offered menu items */}
              <MenuCategory items={offered}></MenuCategory>
              <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
              <MenuCategory items={pizza} title={"pizza"} description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi." img={pizzaImg}></MenuCategory>
              <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
              <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
          </div>
      );
      };

      export default Menu;

###### Order Tab-----3 ways
##### CMD
      npm install --save react-tabs


##### ../../../components/FoodCard/FoodCard.jsx

      
       const FoodCard = ({item}) => {
          const {name, image, price, recipe} = item;
          return (
              <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src={image} alt="Shoes" /></figure>
                  <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                  <div className="card-body flex flex-col items-center">
                      <h2 className="card-title">{name}</h2>
                      <p>{recipe}</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                      </div>
                  </div>
              </div>
          );
          
      };

      export default FoodCard;


##### ../OrderTab/OrderTab.jsx


        import FoodCard from '../../../components/FoodCard/FoodCard';


        const OrderTab = ({ items }) => {
            
            return (
                <div >

                            <div className='grid md:grid-cols-3 gap-10'>
                                {
                                    items.map(item => <FoodCard
                                        key={item._id}
                                        item={item}
                                    ></FoodCard>)
                                }
                            </div>

                    

                  
                </div>
            );
        };

        export default OrderTab;


##### pages/Order/Order/Order.jsx


      import { useState } from 'react';
      import orderCoverImg from '../../../assets/shop/banner2.jpg'
      import Cover from '../../Shared/Cover/Cover';
      import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
      import 'react-tabs/style/react-tabs.css';



      import { Helmet } from 'react-helmet-async';
      import useMenu from '../../../hooks/useMenu';

      import OrderTab from '../OrderTab/OrderTab';

      const Order = () => {
        const [menu] = useMenu();
        const [tabIndex, setTabIndex] = useState(0);
        const desserts = menu.filter(item => item.category === 'dessert');
        const soup = menu.filter(item => item.category === 'soup');
        const salad = menu.filter(item => item.category === 'salad');
        const pizza = menu.filter(item => item.category === 'pizza');
        const drinks = menu.filter(item => item.category === 'drinks');
        return (
          <div>
                <Helmet>
                      <title>Bistro Boss | Order Food</title>
                  </Helmet>
                  <Cover img={orderCoverImg} title="Order Food"></Cover>
                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                          <Tab>desserts</Tab>
                          <Tab>soup</Tab>
                          <Tab>salad</Tab>
                          <Tab>pizza</Tab>
                          <Tab>drinks</Tab>
                        
                        </TabList>

                        <TabPanel>
                              <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={desserts}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={pizza}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={drinks}></OrderTab>
                        </TabPanel>
                      </Tabs>
                  
          </div>
        );
      };

      export default Order;

 