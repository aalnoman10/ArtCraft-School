import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, userLoding } = useContext(AuthContext);
    const location = useLocation()

    if (user) {
        return children
    }
    else if (userLoding) {
        return <h1>Loding ...</h1>
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} />

};

export default PrivateRoute;