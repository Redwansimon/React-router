import { Outlet, useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Home = () => {
    
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Header></Header>
            <h2>this is home section</h2>
            {
                navigation.state === "loading" ? <p>loading ......</p> :<Outlet></Outlet>
                
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;