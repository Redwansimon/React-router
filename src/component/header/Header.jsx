import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div>
            <h2>this is header section</h2>
            <ul>
                <Link to="/">home</Link>
               <Link to="/about">About</Link>
                
                <Link to="/contact">contactt</Link>
                <Link to="/users">User</Link>
            </ul>
            
        </div>
    );
};

export default Header;