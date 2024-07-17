import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    // hover:text-[#EEFF25]
    const menus =
        <>
            <li>
                <NavLink to={'/'} activeClassName="active">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to={'/contact-us'} activeClassName="active">
                    Contact Us
                </NavLink>
            </li>

            <li>
                <NavLink to={'/dashboard'} activeClassName="active">
                    Dashboard
                </NavLink>
            </li>

            <li>
                <NavLink to={'/menus'} activeClassName="active">
                    Menu
                </NavLink>
            </li>

            <li>
                <NavLink to={'/shop/salad'} activeClassName="active">
                    Shop
                </NavLink>
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

                    <div className="w-48 text-[#EEFF25]">
                        <Link to="/">
                            <h2 className="text-xl md:text-3xl font-bold ">Bistro Boss</h2>

                            <p className="text-sm md:text-xl font-semibold tracking-[.25rem] md:tracking-[.4rem]">Restaurant</p>
                        </Link>
                    </div>

                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu-horizontal text-md gap-6 px-2">
                        {
                            menus
                        }
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">

                    <Link to={"sign-up"}>
                        <button className="px-3 py-1 text-white font-medium">
                            Sign Up
                        </button>
                    </Link>

                    <Link to={"sign-in"}>
                        <button className="px-3 py-1 text-white font-medium">
                            Sign In
                        </button>
                    </Link>

                </div>
            </div>

        </>
    );
};

export default Navbar;