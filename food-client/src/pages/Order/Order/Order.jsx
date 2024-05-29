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