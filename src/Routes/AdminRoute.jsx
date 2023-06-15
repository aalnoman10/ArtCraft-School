import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useCheckRole from "../hooks/useCheckRole";

const AdminRoute = ({ children }) => {

    const { user, userLoding } = useContext(AuthContext)
    const location = useLocation()
    const checkRole = useCheckRole()

    if (user && checkRole.role === 'admin') {
        return children
    }
    else if (userLoding) {
        return <h1>Loding ...</h1>
    }

    return <Navigate to='/login' state={{ from: location }} replace={true} />
};

export default AdminRoute;