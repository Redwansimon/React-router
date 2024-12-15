import { useLoaderData } from "react-router-dom";
import Food from "../food/Food";


const Foods = () => {
    const food = useLoaderData();
    const foods = food.categories;

    return (
        <div>
            <h2>Total Foods Categories : {food.categories.length}</h2>
            <div className="user">
                {
                    foods.map((food)=><Food food={food} key={food.idCategory}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;