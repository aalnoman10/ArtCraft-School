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
        return <div className="grid place-items-center h-[80vh]">
            <p className="text-3xl">Loading...</p>
        </div>
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} />

};

export default PrivateRoute;