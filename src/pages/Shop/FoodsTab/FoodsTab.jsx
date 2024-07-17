import PropTypes from 'prop-types';
import FoodCard from "../FoodCard/FoodCard";

const FoodsTab = ({ foodItems }) => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
                foodItems.map(foodItem => <FoodCard
                    key={foodItem._id}
                    foodItem={foodItem}
                ></FoodCard>)
            }
        </div>
    );
};

FoodsTab.propTypes = {
    foodItems: PropTypes.node,
}

export default FoodsTab;