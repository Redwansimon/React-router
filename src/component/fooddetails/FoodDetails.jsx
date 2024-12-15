import { useLoaderData } from "react-router-dom";
import Meal from "../meal/Meal";
import './fooddetails.css'

const FoodDetails = () => {
    const food =useLoaderData();
 
    const meals=food.meals;
    console.log(meals)
    // const style ={
       
    //         display: "grid";
    //         grid-template-columns: "repeat(3, 1fr)";
    //         gap: "10px";
        
    // }

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