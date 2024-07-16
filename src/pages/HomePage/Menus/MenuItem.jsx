import PropTypes from 'prop-types';

const MenuItem = ({ menuItem }) => {

    const { name, image, recipe, price } = menuItem;

    return (

        <div className='flex items-start gap-6'>
            <img style={{ borderRadius: '0 200px 200px 200px' }}
                className='w-[100px] h-[90px]'
                src={image} alt="" />

            <div>
                <h4 className='text-[#151515] text-lg font-medium uppercase'>{name} <span className='font-normal'> -------------- </span> </h4>
                <p className='text-[#737373] mt-2'>{recipe}</p>
            </div>

            <p className='text-[#BB8506] text-lg font-medium'>${price}</p>

        </div>
    );
};

MenuItem.propTypes = {
    menuItem: PropTypes.node,
}

export default MenuItem;