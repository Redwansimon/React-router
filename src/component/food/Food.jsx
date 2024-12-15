import { Link, useNavigate } from "react-router-dom";
import './food.css'

const Food = ({food}) => {
    const navigate = useNavigate();
    const handel =()=>{
        navigate(`/foods/${strCategory}`)
    }
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=food;
    return (
        <div className="u">
            <h2>Food id :{idCategory} </h2>
            <h3>Food category :{strCategory} </h3>
            <img src={strCategoryThumb} alt="" />
            <p className="p">Food Category Description :{strCategoryDescription} </p>
            <Link to={`/foods/${strCategory}`}><button className="btn">show details</button></Link>
            <button onClick={handel}>show details by button</button>

        </div>
    );
};

export default Food;