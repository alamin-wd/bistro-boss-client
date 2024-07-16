import PropTypes from 'prop-types';
import MenuItem from '../../../pages/HomePage/Menus/MenuItem';

const MenuCategory = ({ menuItems }) => {

    return (

        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-6'>

                {
                    menuItems.map(menuItem => <MenuItem
                        key={menuItem._id}
                        menuItem={menuItem}
                    ></MenuItem>)
                }

            </div>

            <div className=' text-center'>
                <button className="text-[#1F2937] hover:text-[#BB8506] text-lg font-medium px-4 py-1 border-b-2 border-[#1F2937] rounded-lg uppercase">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    menuItems: PropTypes.node,
}

export default MenuCategory;