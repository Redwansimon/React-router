import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>oppss</h2>
            <p>{error.statusText}</p>
        </div>
    );
};

export default Error;