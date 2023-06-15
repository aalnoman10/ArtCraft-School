import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useCheckRole from "../hooks/useCheckRole";

const AdminRoute = ({ children }) => {

    const { user, userLoding } = useContext(AuthContext)
    const [isLoading, checkRole] = useCheckRole()

    if (user && checkRole.role === 'admin') {
        return children
    }
    else if (userLoding || isLoading) {
        return <h1>Loding ...</h1>
    }

    return <Navigate to='/' replace={true} />
};

export default AdminRoute;