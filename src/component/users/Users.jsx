import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "./user.css"

const Users = () => {
    const users = useLoaderData();
   
    return (
        <div>
            <h2>user Name :{users.length} </h2>
            <h2>this comunity is awesome</h2>
            <div className="user">
                {users.map(user => <User user={user} key={user.id}></User>)}
            </div>
        </div>
    );
};

export default Users;