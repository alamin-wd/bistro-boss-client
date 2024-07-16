
import useMenu from "../../../hooks/useMenu";
import MenuItem from "./MenuItem";

const Menus = () => {

    const [menus] = useMenu();

    const popularItems = menus.filter(item => item.category === 'popular');

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                popularItems.map(menuItem => <MenuItem
                    key={menuItem._id}
                    menuItem={menuItem}
                ></MenuItem>)
            }
        </div>
    );
};

export default Menus;