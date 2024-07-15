import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menus = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {

        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {

                const popularItems = data.filter(item => item.category === 'popular');

                setMenus(popularItems);
            });

    }, [])

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                menus.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                ></MenuItem>)
            }
        </div>
    );
};

export default Menus;