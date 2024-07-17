import { Helmet } from "react-helmet-async";
import coverPageBg from "../../assets/shop/banner2.jpg";
import PageCover from "../../components/Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodsTab from "./FoodsTab/FoodsTab";
import { useParams } from "react-router-dom";

const Shop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();

    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menus] = useMenu();

    const desserts = menus.filter(item => item.category === 'dessert');
    const pizza = menus.filter(item => item.category === 'pizza');
    const salads = menus.filter(item => item.category === 'salad');
    const soups = menus.filter(item => item.category === 'soup');
    const drinks = menus.filter(item => item.category === 'drinks');

    return (

        <div>
            <Helmet>
                <title>Shop | Bistro Boss Restaurant</title>
            </Helmet>

            <PageCover
                title={"Our Shop"}
                description={"Would you like to try a dish?"}
                coverPageBg={coverPageBg}
            ></PageCover>

            <div className="w-11/12 mx-auto my-20">

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList className={"uppercase font-medium text-center"}>

                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>

                    <TabPanel>
                        <FoodsTab
                            foodItems={salads}
                        ></FoodsTab>
                    </TabPanel>

                    <TabPanel>
                        <FoodsTab
                            foodItems={pizza}
                        ></FoodsTab>
                    </TabPanel>

                    <TabPanel>
                        <FoodsTab
                            foodItems={soups}
                        ></FoodsTab>
                    </TabPanel>

                    <TabPanel>
                        <FoodsTab
                            foodItems={desserts}
                        ></FoodsTab>
                    </TabPanel>

                    <TabPanel>
                        <FoodsTab
                            foodItems={drinks}
                        ></FoodsTab>
                    </TabPanel>

                </Tabs>

            </div>

        </div>
    );
};

export default Shop;