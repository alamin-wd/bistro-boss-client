import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "../../components/Shared/MenuCategory/MenuCategory";
import coverPageBg from "../../../src/assets/menu/banner3.jpg";
import dessertBg from "../../../src/assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../src/assets/menu/pizza-bg.jpg";
import saladBg from "../../../src/assets/menu/salad-bg.jpg";
import soupBg from "../../../src/assets/menu/soup-bg.jpg";
import PageCover from "../../components/Shared/PageCover/PageCover";

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
                <PageCover
                    coverPageBg={coverPageBg}
                    title={"Menu"}
                    description={"Would you like to try a dish?"}
                ></PageCover>
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
                            title={"desserts"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                        category={"dessert"}
                            menuItems={desserts}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Pizza Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={pizzaBg}
                            title={"pizza"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                        category={"pizza"}
                            menuItems={pizzas}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Salads Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={saladBg}
                            title={"salad"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                        category={"salad"}
                            menuItems={salads}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Soups Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={soupBg}
                            title={"soup"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                        category={"soup"}
                            menuItems={soups}
                        ></MenuCategory>

                    </div>

                </section>

                {/* Salads Section */}
                <section className="my-10 ">

                    <div className="w-full my-10">
                        <Cover
                            coverBg={coverPageBg}
                            title={"drinks"}
                            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}
                        ></Cover>
                    </div>

                    <div className="w-11/12 mx-auto">

                        <MenuCategory
                            category={"drinks"}
                            menuItems={drinks}
                        ></MenuCategory>

                    </div>

                </section>

            </div>
        </div>
    );
};

export default OurMenu;