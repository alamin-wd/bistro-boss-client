import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading}) => {

    return (

        <div>
            <div className="w-full md:w-1/3 mx-auto text-center mb-10">
                <p className="text-[#D99904] text-lg font-medium italic mb-4">{subHeading}</p>

                <h3 className="text-[#151515] text-2xl md:text-4xl font-semibold py-4 border-t-4 border-b-4">{heading}</h3>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.node,
    subHeading: PropTypes.node,
}

export default SectionTitle;