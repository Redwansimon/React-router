import { Link } from "react-router-dom";


const Food = ({food}) => {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=food;
    return (
        <div className="u">
            <h2>Food id :{idCategory} </h2>
            <h3>Food category :{strCategory} </h3>
            <img src={strCategoryThumb} alt="" />
            {/* <p>Food Description :{strCategoryDescription} </p> */}
            <Link to={`/foods/${strCategory}`}><button>show details</button></Link>

        </div>
    );
};

export default Food;