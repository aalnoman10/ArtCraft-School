import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useCheckRole from "../hooks/useCheckRole";

const InstructorRoute = ({ children }) => {

    const { user, userLoding } = useContext(AuthContext)
    const [isLoading, checkRole] = useCheckRole()

    if (userLoding || isLoading) {
        return <h1>Loding ...</h1>
    }
    else if (user && checkRole?.role === "instructor") {
        return children
    }

    return <Navigate to='/' replace={true} />
};

export default InstructorRoute;

// todo :