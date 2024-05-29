
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
                  img={menuImg} 
                  title="our menu" 
                  description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.">


            </Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            
    </div>
  );
};

export default Menu;