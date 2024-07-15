import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {

    const menus =
        <>
            <li>
                <Link>Home</Link>
            </li>
        </>

    return (

        <>
            <div className="navbar bg-[#15151580] text-white fixed z-10 px-12">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                            <HiMenuAlt1 className="text-2xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-200 rounded-lg z-[1] mt-2 w-40 p-2 shadow font-medium">
                            {
                                menus
                            }
                        </ul>
                    </div>

                    <div className="w-48">
                        <Link to="/">
                            <h2 className="text-xl md:text-3xl font-bold ">Bistro Boss</h2>

                            <p className="text-sm md:text-xl font-semibold tracking-[.25rem] md:tracking-[.4rem]">Restaurant</p>
                        </Link>
                    </div>

                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu-horizontal px-1 hover:text-[#EEFF25] text-lg font-medium">
                        {
                            menus
                        }
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;