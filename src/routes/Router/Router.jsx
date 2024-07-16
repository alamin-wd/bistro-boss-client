import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/HomePage/Home/Home";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Dashboard from "../../pages/Dashboard/Dashboard";
import OurMenu from "../../pages/OurMenu/OurMenu";
import Shop from "../../pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/menus",
                element: <OurMenu></OurMenu>,
            },
            {
                path: "/shop",
                element: <Shop></Shop>,
            },
            // {
            //     path: "/sign-up",
            //     element: ,
            // },
            // {
            //     path: "/sign-in",
            //     element: ,
            // },
        ]
    },
]);