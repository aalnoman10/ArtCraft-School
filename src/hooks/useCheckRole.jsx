import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCheckRole = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, data: checkRole = {} } = useQuery({
        queryKey: ['role'],
        queryFn: () =>
            fetch(`http://localhost:5000/users?email=${user?.email}`).then(
                (res) => res.json()
            ),
    })

    return [isLoading, checkRole]
};

export default useCheckRole;

// /search?q