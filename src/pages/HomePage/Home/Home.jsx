import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import chefServiceImg from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import Menus from "../Menus/Menus";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

    return (

        <div>
            <Banner></Banner>

            <div className="w-11/12 mx-auto">

                {/* Category Section */}
                <div className="my-20">
                    {
                        <SectionTitle
                            subHeading={"---From 11:00am to 10:00pm---"}
                            heading={"ORDER ONLINE"}
                        ></SectionTitle>
                    }

                    {
                        <CategorySlider></CategorySlider>
                    }

                </div>

                {/* Chef service Section */}
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${chefServiceImg})`,
                    }}>

                    <div className="hero-content bg-[#FFFFFF] text-black text-center md:px-48 md:py-20">
                        <div className="max-w-md md:max-w-lg space-y-6">
                            <h1 className="text-[#151515] text-5xl font-semibold uppercase">Bistro Boss</h1>

                            <p className="text-[#151515]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                            </p>

                        </div>
                    </div>

                </div>

                {/* Menu Section */}
                <div className="my-20 ">
                    <div>
                        {
                            <SectionTitle
                                subHeading={"---Check it out---"}
                                heading={"FROM OUR MENU"}
                            ></SectionTitle>
                        }
                    </div>

                    <div>
                        {
                            <Menus></Menus>
                        }
                    </div>

                    <div className="mt-10 text-center">
                        <button className="text-[#1F2937] hover:text-[#BB8506] text-lg font-medium px-4 py-1 border-b-2 border-[#1F2937] rounded-lg">
                            View Full  Menu
                        </button>
                    </div>

                </div>

                {/* Contact Us */}
                <div className="bg-[#151515] mb-6 md:mb-10 px-6 py-10 md:py-20 text-center">

                    <h3 className="text-white text-2xl md:text-5xl font-semibold">Call Us: +88 0192345678910</h3>

                </div>

                {/* CHEF RECOMMENDS Section */}
                <div>
                    <div>
                        {
                            <SectionTitle
                                subHeading={"---Should Try---"}
                                heading={"CHEF RECOMMENDS"}
                            ></SectionTitle>
                        }
                    </div>

                    <div>
                        {
                            <ChefRecommends></ChefRecommends>
                        }
                    </div>
                </div>

                {/* Featured Section */}
                <div className="featured-item bg-fixed bg-[#151515B3] my-10 py-10 ">

                    <div>
                        {
                            <SectionTitle
                                subHeading={"---Check it out---"}
                                heading={"FROM OUR MENU"}
                            ></SectionTitle>
                        }
                    </div>

                    <div>
                        {
                            <Featured></Featured>
                        }
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="my-10 ">

                    <div>
                        {
                            <SectionTitle
                                subHeading={"---What Our Clients Say---"}
                                heading={"TESTIMONIALS"}
                            ></SectionTitle>
                        }
                    </div>

                    <div>
                        {
                            <Testimonial></Testimonial>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;