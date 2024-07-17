import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";

const ChefRecommends = () => {

    const [recommendItems, setRecommendItems] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/menus")
            .then(res => res.json())
            .then(data => {

                const filteredItems = data.filter(item => item.category === 'offered');

                setRecommendItems(filteredItems);
            })
    }, [])
 
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {
                recommendItems.map(recommendItem => <RecommendCard
                    key={recommendItem._id}
                    recommendItem={recommendItem}
                ></RecommendCard>)
            }
        </div>
    );
};

export default ChefRecommends;