import "./Featured.css";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {

    return (

        <div className="md:flex md:justify-center md:items-center md:gap-10 px-10 md:px-40 py-6 md:py-8 text-white ">

            <div className="md:w-1/2 md:h-[300px]">
                <img className="h-full" src={featuredImg} alt="" />
            </div>

            <div className="md:w-1/2 ">
                <h3 className="text-xl mb-2">March 20, 2023 <br />
                    WHERE CAN I GET SOME?</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quia optio veniam molestias corrupti vero reiciendis, voluptatem pariatur at esse quisquam quas blanditiis ipsam dolores eos ipsa impedit ducimus natus alias distinctio expedita deserunt deleniti? Quia cum illum enim animi ea ab et pariatur soluta, deleniti laudantium dignissimos laborum quis.
                </p>

                <button className=" hover:text-[#BB8506] text-lg font-medium mt-6 px-4 py-1 border-b-2 border-[#BB8506] rounded-lg">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Featured;