import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ coverBg, title, description }) => {

    return (

        <div>

            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={coverBg}
                bgImageAlt={title}
                strength={-200}
            >

                <div
                    className="hero w-full h-[300px] md:h-[400px] relative">

                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="bg-[#15151599] w-4/5 md:w-1/2 mx-auto p-6 md:py-10 text-white text-center absolute top-1/4 border">

                        <div className="md:max-w-xl mx-auto">

                            <h1 className="mb-2 md:mb-5 text-2xl font-semibold md:text-5xl uppercase">{title}</h1>

                            <p className=" md:font-medium">{description}</p>

                        </div>

                    </div>

                </div>

            </Parallax>

        </div>


    );
};

Cover.propTypes = {
    coverBg: PropTypes.node,
    title: PropTypes.node,
    description: PropTypes.node
}

export default Cover;