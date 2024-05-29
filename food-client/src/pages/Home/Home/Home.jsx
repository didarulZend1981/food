import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistor Boss | Home</title>
        
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
    </div>
  );
};

export default Home;