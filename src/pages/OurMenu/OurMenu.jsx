import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "../../components/Shared/MenuCategory/MenuCategory";
import coverBg from "../../../src/assets/menu/banner3.jpg";
import dessertBg from "../../../src/assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../src/assets/menu/pizza-bg.jpg";
import saladBg from "../../../src/assets/menu/salad-bg.jpg";
import soupBg from "../../../src/assets/menu/soup-bg.jpg";

const OurMenu = () => {

    const [menus] = useMenu();

    const offerItems = menus.filter(item => item.category === 'offered');
    const desserts = menus.filter(item => item.category === 'dessert');
    const pizzas = menus.filter(item => item.category === 'pizza');
    const salads = menus.filter(item => item.category === 'salad');
    const soups = menus.filter(item => item.category === 'soup');
    const drinks = menus.filter(item => item.category === 'drinks');

    return (

        <div>
            <Helmet>
                <title>Menus | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Page Cover  */}
            <div className="w-full">
                <Cover
                    coverBg={coverBg}
                    title={"OUR MENU"}
                    description={"Would you like to try a dish?"}
                ></Cover>
            </div>

            <div className="my-20">
                {/* Offer Section */}
                <section className="w-11/12 mx-auto my-10 ">

                    <div>
                        <SectionTitle
                            subHeading={"---Don't miss---"}
                            heading={"TODAY'S OFFER"}
                        ></SectionTitle>
                    </div>

                    <div>
                        <MenuCategory
                            menuItems={offerItems}
                        ></MenuCategory>
                    </div>

                </section>

                {/* Desserts Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={dessertBg}
                            title={"DESSERT'S"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            menuItems={desserts}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Pizza Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={pizzaBg}
                            title={"Pizza's"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            menuItems={pizzas}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Salads Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={saladBg}
                            title={"Salad's"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            menuItems={salads}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Soups Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={soupBg}
                            title={"Soup's"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            menuItems={soups}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Salads Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={coverBg}
                            title={"Drink's"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            menuItems={drinks}
                        ></MenuCategory>

                    </div>

                </section>

            </div>
        </div>
    );
};

export default OurMenu;