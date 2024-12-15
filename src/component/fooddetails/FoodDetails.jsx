import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Meal from "../meal/Meal";
import './fooddetails.css'

const FoodDetails = () => {
    const food =useLoaderData();
    const params = useParams();
    console.log(params.userId);
    const meals=food.meals;


    return (
        <div className=''>
            <h3>this is from food datails</h3>
            <div className="user">
                
                {
                    meals.map((meal)=><Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>


        </div>
    );
};

export default FoodDetails;