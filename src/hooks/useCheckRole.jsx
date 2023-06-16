import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCheckRole = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, data: checkRole = {} } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () =>
            await fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/users?email=${user?.email}`).then(
                (res) => res.json()
            ),
    })

    return [isLoading, checkRole]
};

export default useCheckRole;