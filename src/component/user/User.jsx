import { Link } from 'react-router-dom';
import './use.css'

const User = ({user}) => {
    const {id ,name, username,email}=user;

    return (
        <div className='u'>
            <h2>user name:{name}</h2>
            <h2>user name : {username}</h2>
            <Link to={`/users/${id}`}>show details</Link>

        </div>
    );
};

export default User;