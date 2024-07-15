import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper Images
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";

const CategorySlider = () => {

    return (

        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper ">

                <SwiperSlide>
                    <img src={slideImg1} alt="" />
                    <h4 className='text-3xl font-semibold py-4 uppercase -mt-24 text-center text-white '>Salad</h4>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slideImg2} alt="" />
                    <h4 className='text-3xl font-semibold py-4 uppercase -mt-24 text-center text-white'>Soups</h4>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slideImg3} alt="" />
                    <h4 className='text-3xl font-semibold py-4 uppercase -mt-24 text-center text-white'>pizzas</h4>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slideImg4} alt="" />
                    <h4 className='text-3xl font-semibold py-4 uppercase -mt-24 text-center text-white'>desserts</h4>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slideImg5} alt="" />
                    <h4 className='text-3xl font-semibold py-4 uppercase -mt-24 text-center text-white'>Salad</h4>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CategorySlider;