import PropTypes from 'prop-types';

const FoodCard = ({ foodItem }) => {

    const { image, name, recipe, price } = foodItem;

    return (

        <div className="card w-96 shadow-xl">

            <figure className="">
                <img
                    src={image}
                    alt={name}
                    className="w-full" />
            </figure>

            <p className='bg-[#BB8506] text-white font-medium px-3 py-1 absolute right-4 top-4'>${price}</p>

            <div className="card-body bg-[#F3F3F3] px-4 md:px-10 items-center text-center">

                <h2 className="card-title text-[#151515]">{name}</h2>

                <p className='text-[#151515]'>{recipe}</p>

                <div className="card-actions mt-6">
                    <button className="bg-[#E8E8E8] hover:bg-[#1F2937] 
                    text-[#BB8506] font-medium px-4 py-1 border-b-2 border-[#BB8506] hover:border-none rounded-lg uppercase">
                        add to cart
                    </button>
                </div>

            </div>

        </div>
    );
};

FoodCard.propTypes = {
    foodItem: PropTypes.node,
}

export default FoodCard;