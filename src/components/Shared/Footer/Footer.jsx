import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (

        <div>
            <footer>
                <div className="w-full flex flex-col md:flex-row justify-center items-center text-white h-[400px] text-center">

                    <div className="w-full md:w-1/2 h-full bg-[#1F2937] flex justify-center items-center ">

                        <div >
                            <h4 className="text-3xl font-medium mb-6">CONTACT US</h4>

                            <p className="text-lg font-medium">123 ABS Street, Uni 21, Bangladesh <br />
                                +88 123456789 <br />
                                Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-full bg-[#111827] flex justify-center items-center ">

                        <div>
                            <h4 className="text-3xl font-medium mb-6">Follow US</h4>

                            <p className="text-lg font-medium">Join us on social media</p>

                            <div className="flex justify-center items-center gap-6 mt-10 text-2xl">
                                <FaFacebookF className="hover:text-[#4267B2]" />
                                <FaInstagram className="hover:text-[#f1791d]" />
                                <FaTwitter className="ms-2 hover:text-[#1DA1F2]" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-[#151515] text-white text-center py-4 text-sm ">

                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by
                        <span className="font-medium ms-2">Bistro Boss Restaurant.</span>
                    </p>

                </div>

            </footer>

        </div>
    );
};

export default Footer;