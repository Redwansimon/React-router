import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    
    return (
        <div>
            <h2>this is header sections</h2>
            <nav>
                
                <NavLink to='/'>Home</NavLink>
               <NavLink to="/about">About</NavLink>
                <NavLink to ="/foods">Foods</NavLink>
                <Link to="/contact">contactt</Link>
                <Link to="/users">User</Link>
            </nav>
            
        </div>
    );
};

export default Header;