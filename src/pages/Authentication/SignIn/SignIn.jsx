import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import signInPageImage from "../../../assets/others/authentication2.png";

const SignIn = () => {

    return (

        <div className="bg-base-300 max-w-full min-h-screen flex items-center">
            <Helmet>
                <title>Sign In | Bistro Boss Restaurant</title>
            </Helmet>

            <div className="border-2 w-11/12 mx-auto bg-base-300 flex flex-col md:flex-row md:justify-center md:items-center md:gap-20 md:px-20 md:py-10 p-10 shadow-2xl">

                <div className="text-center">
                    <img src={signInPageImage} alt="" />
                </div>

                <div className="w-full max-w-sm p-6 md:ms-10">

                    <h1 className="text-[#151515] text-4xl font-bold text-center mb-4">Sign In</h1>

                    <form className="">

                        <div className="form-control">

                            <label className="label">
                                <span className="text-[#444444] text-lg font-semibold">Email</span>
                            </label>

                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="text-[#444444] text-lg font-semibold">Password</span>
                            </label>

                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[#5D5FEF]">Reload Captcha</a>
                            </label>
                        </div>

                        <div className="form-control">

                            <input
                                name=""
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered" required />
                        </div>

                        <div className="my-4">

                            <input
                                type="submit"
                                value="Sign In"
                                className="w-full bg-[#D1A054] hover:bg-[#e2ab5a] text-white font-medium py-3 rounded-lg" />

                        </div>

                    </form>

                    <div className="flex flex-col justify-center items-center">

                        <p className="text-[#D1A054] text-lg font-medium">Do not have any account?

                            <Link to={"/sign-up"}>
                                <span className="ms-2 font-bold hover:underline">Sign Up</span>
                            </Link>
                        </p>

                        <p className="text-[#444444] text-lg font-medium">Or sign In with</p>

                        <div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignIn;