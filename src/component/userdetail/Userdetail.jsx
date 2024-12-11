import { useLoaderData } from "react-router-dom";


const Userdetail = () => {
    const user = useLoaderData();
    console.log(user)
const style ={
    border : "10px solid blue",
    padding : '150px',
    margin : '20px'
   
    
}
    return (
        <div style={style}>
            <h3> user name : {user.name}</h3>
            <h3>user email address : {user.email}</h3>
            <h4>user phone number :{user.phone}</h4>
        </div>
    );
};

export default Userdetail;