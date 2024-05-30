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

##### SERVER SETUP

      index.js
          // get all menuFood data from db
        app.get('/menuFood', async (req, res) => {
          const result = await menuFoodCollection.find().toArray()
          res.send(result)
        })

        // get all reviewsFood data from db
        app.get('/reviewsFood', async (req, res) => {
          const result = await reviewsFoodCollection.find().toArray()
          res.send(result)
        })


        
##### select tab


##### pages/Order/Order/Order.jsx
      import { useState } from 'react';
      import orderCoverImg from '../../../assets/shop/banner2.jpg'
      import Cover from '../../Shared/Cover/Cover';
      import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
      import 'react-tabs/style/react-tabs.css';



      import { Helmet } from 'react-helmet-async';
      import useMenu from '../../../hooks/useMenu';

      import OrderTab from '../OrderTab/OrderTab';
      import { useParams } from 'react-router-dom';

      const Order = () => {
        //---select tab
        const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
        const { category } = useParams();
        const initialIndex = categories.indexOf(category);
        const [tabIndex, setTabIndex] = useState(initialIndex);
        //---select tab
        const [menu] = useMenu();
      
        const salad = menu.filter(item => item.category === 'salad');
        const pizza = menu.filter(item => item.category === 'pizza');
        const soup = menu.filter(item => item.category === 'soup');
        const desserts = menu.filter(item => item.category === 'dessert');
        const drinks = menu.filter(item => item.category === 'drinks');
        return (
          <div>
                <Helmet>
                      <title>Bistro Boss | Order Food</title>
                  </Helmet>
                  <Cover img={orderCoverImg} title="Order Food"></Cover>
                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                          <Tab>salad</Tab>
                          <Tab>pizza</Tab>
                          <Tab>soup</Tab>
                          <Tab>desserts</Tab>
                          <Tab>drinks</Tab>
                        
                        </TabList>

                        <TabPanel>
                              <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={pizza}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={soup}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={desserts}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={drinks}></OrderTab>
                        </TabPanel>
                      </Tabs>
                  
          </div>
        );
      };

      export default Order;



###### Authintication 
###### CMD
       npm i firebase


###### env.local

      VITE_apiKey=AIzaSyCTJEwvJ4ajtd3mF0qNjl3wBLMK28_WSpI
      VITE_authDomain=art-auth-1a330.firebaseapp.com
      VITE_projectId=art-auth-1a330
      VITE_storageBucket=art-auth-1a330.appspot.com
      VITE_messagingSenderId=144394236845
      VITE_appId=1:144394236845:web:4b9dc8fd9cd8751d55a724
      VITE_API_URL=http://localhost:8000
      VITE_IMGBB_API_KEY=46fc905dcd878d6df9be3d475735c2a9


###### firebase/firebase.config.js 

        import { initializeApp } from 'firebase/app'

        const firebaseConfig = {
            apiKey: import.meta.env.VITE_apiKey,
            authDomain: import.meta.env.VITE_authDomain,
            projectId: import.meta.env.VITE_projectId,
            storageBucket: import.meta.env.VITE_storageBucket,
            messagingSenderId: import.meta.env.VITE_messagingSenderId,
            appId: import.meta.env.VITE_appId,
        }

        export const app = initializeApp(firebaseConfig)




###### providers/AuthProvider.jsx


        import { createContext, useEffect, useState } from "react";
        import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
        import { app } from "../firebase/firebase.config";

        export const AuthContext = createContext(null);

        const auth = getAuth(app);

        const AuthProvider = ({ children }) => {
          const [user, setUser] = useState(null);
          const [loading, setLoading] = useState(true);

          const createUser = (email, password) => {
              setLoading(true);
              return createUserWithEmailAndPassword(auth, email, password)
          }

          const signIn = (email, password) => {
              setLoading(true);
              return signInWithEmailAndPassword(auth, email, password);
          }

          const logOut = () => {
              setLoading(true);
              return signOut(auth);
          }

          const updateUserProfile = (name, photo) => {
              return updateProfile(auth.currentUser, {
                  displayName: name, photoURL: photo
              });
          }

          useEffect(() => {
              const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  console.log('current user', currentUser);
                  setLoading(false);
              });
              return () => {
                  return unsubscribe();
              }
          }, [])

          const authInfo = {
              user,
              loading,
              createUser,
              signIn,
              logOut,
              updateUserProfile
          }

          return (
              <AuthContext.Provider value={authInfo}>
                  {children}
              </AuthContext.Provider>
          );
        };

        export default AuthProvider;


##### main.jsx


      import React from 'react'
      import ReactDOM from 'react-dom/client'

      import './index.css'
      import { RouterProvider } from 'react-router-dom'
      import router from './routes/Routes'
      import { HelmetProvider } from 'react-helmet-async';
      import AuthProvider from './providers/AuthProvider'

      ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <AuthProvider>
                  <HelmetProvider>
                      <div className='max-w-screen-xl mx-auto'>
                      <RouterProvider router={router} />
                      </div>
                  </HelmetProvider>
            </AuthProvider>
            
            
          
          </React.StrictMode>,
      )

###### CMD
       
       npm i sweetalert2
       npm install react-hook-form
#### SignUp/SignUp.jsx

      import { useContext } from "react";
      import { Helmet } from "react-helmet-async";
      import { useForm } from "react-hook-form";
      import { Link, useNavigate } from "react-router-dom";
      import Swal from 'sweetalert2'
      import { AuthContext } from "../../providers/AuthProvider";

      const SignUp = () => {

          const { register, handleSubmit, reset, formState: { errors } } = useForm();
          const { createUser, updateUserProfile } = useContext(AuthContext);
          const navigate = useNavigate();

          const onSubmit = data => {
              console.log(data);
              createUser(data.email, data.password)
                  .then(result => {
                      const loggedUser = result.user;
                      console.log(loggedUser);
                      updateUserProfile(data.name, data.photoURL)
                          .then(() => {
                              console.log('user profile info updated')
                              reset();
                              Swal.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'User created successfully.',
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                              navigate('/');

                          })
                          .catch(error => console.log(error))
                  })
          };

          return (
              <>
                  <Helmet>
                      <title>Bistro Boss | Sign Up</title>
                  </Helmet>
                  <div className="hero min-h-screen bg-base-200">
                      <div className="hero-content flex-col lg:flex-row-reverse">
                          <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Sign up now!</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                          </div>
                          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Name</span>
                                      </label>
                                      <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                      {errors.name && <span className="text-red-600">Name is required</span>}
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Photo URL</span>
                                      </label>
                                      <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                      {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Email</span>
                                      </label>
                                      <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                      {errors.email && <span className="text-red-600">Email is required</span>}
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Password</span>
                                      </label>
                                      <input type="password"  {...register("password", {
                                          required: true,
                                          minLength: 6,
                                          maxLength: 20,
                                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                      })} placeholder="password" className="input input-bordered" />
                                      {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                      {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                      {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                      {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                      <label className="label">
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                      </label>
                                  </div>
                                  <div className="form-control mt-6">
                                      <input className="btn btn-primary" type="submit" value="Sign Up" />
                                  </div>
                              </form>
                              <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                          </div>
                      </div>
                  </div>
              </>
          );
      };

      export default SignUp;

#### routes/Routes.jsx

      import { createBrowserRouter } from "react-router-dom";

      import SignUp from "../pages/SignUp/SignUp";
        const router = createBrowserRouter([
          {
            path: "/",
            children:[
                
                {
                  path:'signup',
                  element:<SignUp></SignUp>
                },
            ]
          },
        ]);
        export default router;

###### CMD
       
       npm install react-simple-captcha

##### Login/Login.jsx

      import { useContext, useEffect, useState } from 'react';
      import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
      import { AuthContext } from '../../providers/AuthProvider';
      import { Link, useLocation, useNavigate } from 'react-router-dom';
      import { Helmet } from 'react-helmet-async';
      import Swal from 'sweetalert2'

      const Login = () => {
          const [disabled, setDisabled] = useState(true);
          const { signIn } = useContext(AuthContext);
          const navigate = useNavigate();
          const location = useLocation();

          const from = location.state?.from?.pathname || "/";

          useEffect(() => {
              loadCaptchaEnginge(6);
          }, [])

          const handleLogin = event => {
              event.preventDefault();
              const form = event.target;
              const email = form.email.value;
              const password = form.password.value;
              console.log(email, password);
              signIn(email, password)
                  .then(result => {
                    console.log("login then",result);
                      const user = result.user;
                      console.log("login then",user);
                      Swal.fire({
                          title: 'User Login Successful.',
                          showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                          }
                      });
                      navigate(from, { replace: true });
                  })
          }

          const handleValidateCaptcha = (e) => {
              const user_captcha_value = e.target.value;
              if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false);
              }
              else {
                  setDisabled(true)
              }
          }

          return (
              <>
                  <Helmet>
                      <title>Bistro Boss | Login</title>
                  </Helmet>
                  <div className="hero min-h-screen bg-base-200">
                      <div className="hero-content flex-col md:flex-row-reverse">
                          <div className="text-center md:w-1/2 lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                          </div>
                          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleLogin} className="card-body">
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Email</span>
                                      </label>
                                      <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text">Password</span>
                                      </label>
                                      <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                      <label className="label">
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                      </label>
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <LoadCanvasTemplate />
                                      </label>
                                      <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                                  </div>
                                  <div className="form-control mt-6">
                                      <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                  </div>
                              </form>
                              <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                          </div>
                      </div>
                  </div>
              </>
          );
      };

      export default Login;


#### routes/Routes.jsx


      import Login from "../pages/Login/Login";

            const router = createBrowserRouter([
              {
                path: "/",
              
                children:[
                    

                    {
                      path:'login',
                      element:<Login></Login>
                    },
                    
                ]
              },
            ]);
            export default router;


##### Shared/Navber.jsx

        import { Link } from "react-router-dom";
        import { useContext } from "react";
        import { AuthContext } from "../../../providers/AuthProvider";
        const NavBar = () => {
          const { user, logOut } = useContext(AuthContext);

          const handleLogOut = () => {
              logOut()
                  .then(() => { })
                  .catch(error => console.log(error));
          }
          const navItems =<>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/order/salad">Order Food</Link></li>
                  {
                    user ? <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }
                
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


                    );
        };

        export default NavBar;


###### Layout/Main.jsx

          import { Outlet, useLocation } from "react-router-dom";
          import Footer from "../pages/Shared/Footer/Footer";
          import NavBar from "../pages/Shared/NavBar/NavBar";


          const Main = () => {
            const location = useLocation();
              
              const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

              return (
                  <div>
                      { noHeaderFooter || <NavBar></NavBar>}
                      <Outlet></Outlet>
                      { noHeaderFooter || <Footer></Footer>}
                  </div>
            );
          };

          export default Main;
###### PrivateRoute.jsx
        import { useContext } from "react";
        import { AuthContext } from "../providers/AuthProvider";
        import { Navigate, useLocation } from "react-router";


        const PrivateRoute = ({ children }) => {
            const { user, loading } = useContext(AuthContext);
            const location = useLocation();

            if(loading){
                return <progress className="progress w-56"></progress>
            }

            if (user) {
                return children;
            }
            return <Navigate to="/login" state={{from: location}} replace></Navigate>
        };

        export default PrivateRoute;


##### Cart add 
#### cmd 
      npm i react-icons
      npm i axios
#### src/hooks/useAxiosSecure.jsx
      import axios from "axios";

      const axiosSecure = axios.create({
          baseURL: 'http://localhost:5000'
      })
      const useAxiosSecure = () => {

          return axiosSecure;
      };

      export default useAxiosSecure;

##### src/hooks/useAuth.jsx
      import { useContext } from "react";
      import { AuthContext } from "../providers/AuthProvider";


      const useAuth = () => {
          const auth = useContext(AuthContext);
          return auth;
      };

      export default useAuth;


##### src/components/FoodCard/FoodCard.jsx

        import Swal from "sweetalert2";
        import useAuth from "../../hooks/useAuth";
        import { useLocation, useNavigate } from "react-router-dom";
        import useAxiosSecure from "../../hooks/useAxiosSecure";
        


        const FoodCard = ({ item }) => {
            const { name, image, price, recipe, _id } = item;
            const { user } = useAuth();
            const navigate = useNavigate();
            const location = useLocation();
            const axiosSecure = useAxiosSecure();
           

            const handleAddToCart = () => {
                if (user && user.email) {
                    //send cart item to the database
                    const cartItem = {
                        menuId: _id,
                        email: user.email,
                        name,
                        image,
                        price
                    }
                    axiosSecure.post('/carts', cartItem)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${name} added to your cart`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                // refetch cart to update the cart items count
                               
                            }

                        })
                }
                else {
                    Swal.fire({
                        title: "You are not Logged In",
                        text: "Please login to add to the cart?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, login!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //   send the user to the login page
                            navigate('/login', { state: { from: location } })
                        }
                    });
                }
            }
            return (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={handleAddToCart}
                                className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                            >Add to Cart</button>
                        </div>
                    </div>
                </div>
            );
        };

        export default FoodCard;

##### cart sidebar--
##### CMD 
      npm i @tanstack/react-query

##### src/hooks/useCart.jsx


      // api, axios (axios secure), tan stack 

      import { useQuery } from "@tanstack/react-query";
      import useAxiosSecure from "./useAxiosSecure";
      import useAuth from "./useAuth";

      const useCart = () => {
          const axiosSecure = useAxiosSecure();
          const { user} = useAuth();
          const { refetch, data: cart = [] } = useQuery({
              queryKey: ['cart', user?.email],
              queryFn: async() => {
                  const res = await axiosSecure.get(`/carts?email=${user.email}`);
                  return res.data;
              }
          })

          return [cart, refetch]
      };

      export default useCart;

#### Main.jsx

      import React from 'react'
      import ReactDOM from 'react-dom/client'

      import './index.css'
      import { RouterProvider } from 'react-router-dom'
      import router from './routes/Routes'
      import { HelmetProvider } from 'react-helmet-async';
      import AuthProvider from './providers/AuthProvider'
      import {
          QueryClient,
          QueryClientProvider,
        } from '@tanstack/react-query'
        
        const queryClient = new QueryClient();

      ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>

            <AuthProvider>

                  <QueryClientProvider client={queryClient}>
                      <HelmetProvider>
                          <div className='max-w-screen-xl mx-auto'>
                                  <RouterProvider router={router} />
                          </div>
                      </HelmetProvider>
                  </QueryClientProvider>
                  
            </AuthProvider>
            
            
          
          </React.StrictMode>,
      )


##### Navbar.jsx


      import useCart from "../../../hooks/useCart";


      const NavBar = () => {

        const [cart] = useCart();
        
        const navItems =<>
        
                <li><Link to="/">
                  
                  {/* <Button className="btn">
                  
                    <div className="badge badge-secondary">+0</div>
                  </Button> */}

                  <button className="btn">
                  <FiShoppingCart className="mr-4"></FiShoppingCart>
                  <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                  </Link>
                  
                </li>
                
                  
              </>

        return (
          <div>
            </div>
        );
      };

      export default NavBar;
##### FoodCard.jsx


      import Swal from "sweetalert2";
      import useCart from "../../hooks/useCart";

      const FoodCard = ({item}) => {
          
          const [, refetch] = useCart();

          const handleAddToCart = () => {
              if (user && user.email) {
                  //send cart item to the database
                  const cartItem = {
                      --
                  }
                  axiosSecure.post('/carts', cartItem)
                      .then(res => {
                          console.log(res.data)
                          if (res.data.insertedId) {
                              Swal.fire({
                                  ---
                              });
                              // refetch cart to update the cart items count
                              refetch();
                          }

                      })
              }
              else {
                  Swal.fire({
                      ----
                  }).then((result) => {
                      ---
                      }
                  });
              }
          }
          return (
              <div></div>
          );
          
      };

      export default FoodCard;


##### Server Site 2 API-
    const cartCollection = client.db("foodService").collection("carts");
    // carts collection
    app.get('/carts', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post('/carts', async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    })


##### DASHBOARD---

##### src/Layout/Dashboard.jsx

        import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
        import { NavLink, Outlet } from "react-router-dom";
        import useCart from "../hooks/useCart";


        const Dashboard = () => {
            const [cart] = useCart();

            return (
                <div className="flex">
                    {/* dashboard side bar */}
                    <div className="w-64 min-h-screen bg-orange-400">
                        <ul className="menu p-4">
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd></FaAd>
                                    Add a Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList></FaList>
                                    My Bookings</NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/salad">
                                    <FaSearch></FaSearch>
                                    Menu</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* dashboard content */}
                    <div className="flex-1 p-8">
                        <Outlet></Outlet>
                    </div>
                </div>
            );
        };

        export default Dashboard;

##### routes/Routes.jsx

        import { createBrowserRouter } from "react-router-dom";

        import Dashboard from "../Layout/Dashboard";
        import Cart from "../pages/Dashboard/Cart/Cart";
        const router = createBrowserRouter([
          
          {
            path: 'dashboard',
            element: <Dashboard></Dashboard>,
            children: [
              {
                path: 'cart',
                element: <Cart></Cart>
              }
            ]
          }


        ]);
        export default router;


##### src/pages/Dashboard/Cart/Cart.jsx


      import { FaTrashAlt } from "react-icons/fa";
      import useCart from "../../../hooks/useCart";
      import Swal from "sweetalert2";
      import useAxiosSecure from "../../../hooks/useAxiosSecure";


      const Cart = () => {
          const [cart, refetch] = useCart();
          const totalPrice = cart.reduce((total, item) => total + item.price, 0);
          const axiosSecure = useAxiosSecure();

          const handleDelete = id => {
              Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                  if (result.isConfirmed) {

                      axiosSecure.delete(`/carts/${id}`)
                          .then(res => {
                              if (res.data.deletedCount > 0) {
                                  refetch();
                                  Swal.fire({
                                      title: "Deleted!",
                                      text: "Your file has been deleted.",
                                      icon: "success"
                                  });
                              }
                          })
                  }
              });
          }

          return (
              <div>
                  <div className="flex justify-evenly mb-8">
                      <h2 className="text-4xl">Items: {cart.length}</h2>
                      <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                      <button className="btn btn-primary">Pay</button>

                  </div>
                  <div className="overflow-x-auto">
                      <table className="table  w-full">
                          {/* head */}
                          <thead>
                              <tr>
                                  <th>
                                      #
                                  </th>
                                  <th>Image</th>
                                  <th>Name</th>
                                  <th>Price</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  cart.map((item, index) => <tr key={item._id}>
                                      <th>
                                          {index + 1}
                                      </th>
                                      <td>
                                          <div className="flex items-center gap-3">
                                              <div className="avatar">
                                                  <div className="mask mask-squircle w-12 h-12">
                                                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td>
                                          {item.name}
                                      </td>
                                      <td>${item.price}</td>
                                      <th>
                                          <button
                                              onClick={() => handleDelete(item._id)}
                                              className="btn btn-ghost btn-lg">
                                              <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                          </button>
                                      </th>
                                  </tr>)
                              }


                          </tbody>
                      </table>
                  </div>
              </div>
          );
      };

      export default Cart;



 