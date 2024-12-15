import { useNavigate } from 'react-router-dom';
import './meal.css'

const Meal = ({ meal }) => {
    const navigate = useNavigate();
    const handel =()=>{

        navigate(-1);
    }

    const { strCategory, strArea,
        strMeal
        ,
        strInstructions, strMealThumb, strTags
    } = meal;
   
    return (
        <div className='meal'>
            <h2>Name : {strMeal} </h2>
            <h3>{strArea} recipe</h3>
            <img src={strMealThumb} alt="" />
            <p>Instructions : {
                strInstructions
            }</p>
            <div className='tag'>{
                strTags &&
                (typeof strTags === "string" ?
                    strTags.split(",").map((str, id) => <p key={id}># {str.trim()}</p>) :
                    strTags.map((str, id) => <p key={id}># {str}</p>)
                )
            }</div>
            <button onClick={handel}>Go Back</button>
        </div>
    );
};

export default Meal;